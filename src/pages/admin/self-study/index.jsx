import * as S from './style.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import DropdownNS from '../../../components/dropdown/nosearch/index.jsx';
import Line from '../../../assets/line.svg';
import Circle from '../../../components/button/circle/index.jsx';

export default function AdminSelfStudy() {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([[], [], [], []]);
  const [isOpen, setIsOpen] = useState({});
  const week = ['MON', 'TUE', 'WED', 'THU'];
  const periods = ['7교시', '8~9교시', '10~11교시'];
  const [branch, setBranch] = useState('1');
  const branches = [1, 2, 3, 4];
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const [grade, setGrade] = useState([true, false, false]);
  const [selectedGrade, setSelectedGrade] = useState(1);

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

  const handleInputChange = (classIndex, rowIndex, value) => {
    setSelectedRows(prev => {
      const newRows = [...prev];
      newRows[classIndex][rowIndex] = { period: value };
      return newRows;
    });
  };

  const handleDropdownClick = (classIndex, rowIndex) => {
    setIsOpen(prev => ({
      ...prev,
      [classIndex]: {
        ...prev[classIndex],
        [rowIndex]: !prev[classIndex]?.[rowIndex]
      }
    }));
  };

  const handleBranchChange = (selectedBranch) => {
    setBranch(selectedBranch);
  };

  const addRow = (classIndex) => {
    setSelectedRows(prev => {
      const newRows = [...prev];
      newRows[classIndex] = [...newRows[classIndex], { period: '' }];
      return newRows;
    });
  };

  const toggleBranchDropdown = () => {
    setIsBranchOpen((prev) => !prev);
  };

  const handleSubmit = () => {
    const payload = selectedRows.flatMap((rows, classIndex) =>
      rows.map(row => row.period ? { week_day: week[classIndex], period: mapPeriod(row.period) } : null)
    ).filter(item => item !== null);

    console.log('Payload:', payload);
    mutate(payload);
  };

  const removeRow = (classIndex, rowIndex) => {
    setSelectedRows(prev => {
      const newRows = [...prev];
      newRows[classIndex] = newRows[classIndex].filter((_, index) => index !== rowIndex);
      return newRows;
    });
  };

  const handleCloseBranch = () => {
    setIsBranchOpen(false);
  };

  return (
    <S.Container onClick={() => handleCloseBranch()}>
      <Header />
      <S.Content>
        {Object.values(isOpen).some(rows => Object.values(rows).includes(true)) && (
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
          {selectedRows.map((rows, classIndex) => (
            <S.EditMainData key={classIndex}>
              <h2>{['월', '화', '수', '목'][classIndex]}</h2>
              <S.EditMainTop>
                <S.TopData $length={9}>교시</S.TopData>
              </S.EditMainTop>
              {rows.map((row, rowIndex) => (
                <S.EditRow key={rowIndex}>
                  <S.RowData $length={8}>
                    <DropdownNS
                      name={row?.period || '교시'}
                      item={periods}
                      change={(value) => handleInputChange(classIndex, rowIndex, value)}
                      isOpen={isOpen[classIndex]?.[rowIndex]}
                      click={() => handleDropdownClick(classIndex, rowIndex)}
                    />
                  </S.RowData>
                  <S.P onClick={() => removeRow(classIndex, rowIndex)}>-</S.P>
                </S.EditRow>
              ))}
              <S.PlusBtn onClick={() => addRow(classIndex)}>+</S.PlusBtn>
            </S.EditMainData>
          ))}
        </S.MainContent>
      </S.Content>
    </S.Container>
  );
}
