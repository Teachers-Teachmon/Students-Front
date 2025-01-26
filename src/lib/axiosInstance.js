import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials: true,
});

const refreshAccessToken = async () => {
    const response = await axios.post('/api/reissue', null, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`
        },
        withCredentials: true,
    });
    return response.headers['Authorization'];
};

// 요청 인터셉터
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshAccessToken();
                localStorage.setItem('accessToken', newAccessToken);
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token expired or invalid", refreshError);
                window.location.href = '/login';
                localStorage.removeItem("AT");
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
