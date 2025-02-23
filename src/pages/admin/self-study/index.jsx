import * as S from './style.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import DropdownNS from '../../../components/dropdown/nosearch/index.jsx';
import Line from '../../../assets/line.svg';
import Circle from '../../../components/button/circle/index.jsx';
import { useGetSelfStudy } from '../../../hooks/useSupervision.js';
import { useSaveSelfStudy } from '../../../hooks/useSupervision.js';

export default function AdminSelfStudy() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState({});
  const week = ['MON', 'TUE', 'WED', 'THU'];
  const periods = ['7교시', '8~9교시', '10~11교시'];
  const [branch, setBranch] = useState('1');
  const branches = [1, 2, 3, 4];
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const [grade, setGrade] = useState([true, false, false]);
  const [selectedGrade, setSelectedGrade] = useState(1);


  const [selectedRows, setSelectedRows] = useState({
    MON: [],
    TUE: [],
    WED: [],
    THU: []
  });

  const { data } = useGetSelfStudy(branch, selectedGrade);

  useEffect(() => {
    console.log("API 응답 data:", data);
    if (data) {
      setSelectedRows({
        MON: data.MON || [],
        TUE: data.TUE || [],
        WED: data.WED || [],
        THU: data.THU || [],
      });
    }
  }, [data])
  useEffect(() => {
    console.log("현재 selectedRows:", selectedRows);
  }, [selectedRows]);


  const mapPeriod = (p) => {
    switch (p) {
      case "7교시":
        return "SEVEN_PERIOD";
      case "8~9교시":
        return "EIGHT_AND_NINE_PERIOD";
      case "10~11교시":
        return "TEN_AND_ELEVEN_PERIOD";
      default:
        return "";
    }
  };

  const changeGrade = (idx) => {
    const newGrade = [false, false, false];
    newGrade[idx] = true;
    setGrade(newGrade);
    setSelectedGrade(idx + 1);
  }

  const handleInputChange = (day, rowIndex, value) => {
    setSelectedRows(prev => {
      const newRows = { ...prev };
      newRows[day][rowIndex] = value;
      return newRows;
    });
  };

  const handleDropdownClick = (day, rowIndex) => {
    setIsOpen(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [rowIndex]: !prev[day]?.[rowIndex]
      }
    }));
  };

  const handleBranchChange = (selectedBranch) => {
    setBranch(selectedBranch);
  };

  const addRow = (day) => {
    setSelectedRows(prev => {
      const newRows = { ...prev };
      newRows[day] = [...newRows[day], ""];
      return newRows;
    });
  };

  const toggleBranchDropdown = () => {
    setIsBranchOpen((prev) => !prev);
  };

  const { mutate } = useSaveSelfStudy();

  const handleSubmit = () => {
    const payload = {
      grade: selectedGrade,
      branch: parseInt(branch),
      MON: selectedRows.MON,
      TUE: selectedRows.TUE,
      WED: selectedRows.WED,
      THU: selectedRows.THU
    };

    console.log('Payload:', payload);
    mutate(payload);
  };

  const removeRow = (day, rowIndex) => {
    setSelectedRows(prev => {
      const newRows = { ...prev };
      newRows[day] = newRows[day].filter((_, index) => index !== rowIndex);
      return newRows;
    });
  };

  const handleCloseBranch = () => {
    setIsBranchOpen(false);
  };

  const dayToKorean = (day) => {
    switch (day) {
      case 'MON':
        return '월';
      case 'TUE':
        return '화';
      case 'WED':
        return '수';
      case 'THU':
        return '목';
      default:
        return day;
    }
  };

  return (
    <S.Container onClick={() => handleCloseBranch()}>
      <Header />
      <S.Content>
        {Object.values(isOpen).some(isOpen => isOpen) && (
          <S.Black onClick={() => setIsOpen({})} />
        )}

        <S.MainHeader>
          <h1>고정 자습시간 설정</h1>
          <img src={Line} />
          <div>
            <S.TopDate $length={5} onClick={(e) => e.stopPropagation()}>
              <DropdownNS
                name={branch}
                item={branches}
                change={handleBranchChange}
                isOpen={isBranchOpen}
                click={toggleBranchDropdown}
              />
            </S.TopDate>
            <S.GradeBtn>
              <Circle name={"1학년"} status={grade[0]} On={() => changeGrade(0)} />
              <Circle name={"2학년"} status={grade[1]} On={() => changeGrade(1)} />
              <Circle name={"3학년"} status={grade[2]} On={() => changeGrade(2)} />
            </S.GradeBtn>
          </div>
          <S.SquareBtn>
            <SquareBtn name="저장하기" status={true} On={handleSubmit} />
          </S.SquareBtn>
        </S.MainHeader>
        <S.MainContent>
          {week.map(day => (
            <S.EditMainData key={day}>
              <h2>{dayToKorean(day)}</h2>
              <S.EditMainTop>
                <S.TopData $length={9}>교시</S.TopData>
              </S.EditMainTop>

              {selectedRows[day]?.map((period, rowIndex) => {
                const selectedPeriods = new Set(selectedRows[day].filter((_, i) => i !== rowIndex));

                return (
                  <S.EditRow key={rowIndex}>
                    <S.RowData $length={8}>
                      <DropdownNS
                        name={period || '교시'}
                        item={periods.filter(p => !selectedPeriods.has(p))}
                        change={(value) => {
                          handleInputChange(day, rowIndex, value);
                          setTimeout(() => {
                            setIsOpen({});
                          }, 0);
                        }}
                        isOpen={isOpen[day]?.[rowIndex]}
                        click={() => handleDropdownClick(day, rowIndex)}
                      />
                    </S.RowData>
                    <S.P onClick={() => removeRow(day, rowIndex)}>-</S.P>
                  </S.EditRow>
                );
              })}

              {selectedRows[day].length < periods.length && (
                <S.PlusBtn onClick={() => addRow(day)}>+</S.PlusBtn>
              )}
            </S.EditMainData>
          ))}

        </S.MainContent>
      </S.Content>
    </S.Container>
  );
}
