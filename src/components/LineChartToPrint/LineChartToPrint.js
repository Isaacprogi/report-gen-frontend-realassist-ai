import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);




const LineChartToPrint = ({ crime, chartData }) => {

    //  chart options
    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        maintainAspectRatio:false,
        responsive: true,
        scales: {
            x: {
                type: 'category',
                grid: {
                    color: '#BAC2DB',
                },
                ticks: {
                    color: '#626E99',
                },
            },
            y: {
                type: 'linear',
                grid: {
                    color: '#BAC2DB',
                },
                ticks: {
                    color: '#626E99',
                },
            },
        },
    };

    return (
        <div >
            <div className="w-full rounded-md h-[max-content]">
                <div className='flex items-center justify-start gap-x-[.3rem]'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                            <g opacity="0.4">
                                <path d="M3.33366 5.33329C3.33366 8.27881 6.33366 11.3333 8.00033 11.3333C9.66699 11.3333 12.667 8.27881 12.667 5.33329C12.667 2.38777 10.5777 0.666626 8.00033 0.666626C5.423 0.666626 3.33366 2.38777 3.33366 5.33329Z" fill="#1463FF" />
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.7418 1.55453C13.4959 1.68007 13.3983 1.98123 13.5238 2.22718C13.9316 3.02612 14.167 3.98061 14.167 5.0832C14.167 5.77204 14.0311 6.47542 13.7891 7.16832C13.6981 7.42902 13.8356 7.71417 14.0963 7.80523C14.357 7.89629 14.6421 7.75877 14.7332 7.49807C15.0056 6.71803 15.167 5.90269 15.167 5.0832C15.167 3.83569 14.8999 2.7235 14.4145 1.77254C14.2889 1.52659 13.9878 1.42898 13.7418 1.55453ZM2.25884 1.55453C2.01289 1.42898 1.71173 1.52659 1.58618 1.77254C1.10076 2.7235 0.833658 3.83569 0.833658 5.0832C0.833658 5.90269 0.99501 6.71803 1.26746 7.49807C1.35852 7.75877 1.64367 7.89629 1.90437 7.80523C2.16507 7.71417 2.30259 7.42902 2.21153 7.16832C1.96951 6.47542 1.83366 5.77204 1.83366 5.0832C1.83366 3.98061 2.06904 3.02612 2.47685 2.22718C2.6024 1.98123 2.50479 1.68007 2.25884 1.55453Z" fill="#1463FF" />
                            <ellipse cx="2" cy="2" rx="2" ry="2" transform="matrix(-1 0 0 1 10 3.33325)" fill="#1463FF" />
                        </svg>
                    </div>
                    <span className='text-[.8rem] text-[#090E24] font-[500]'>Crime</span>
                    <div className="w-full h-[2px] bg-gradient-to-r from-[#005DFF] to-[#21DDFF] my-4"></div>
                </div>

                <div className="w-full h-[max-content] flex flex-col bg-[#F2F4F5] rounded-[12px] overflow-hidden">
                    <div className="w-full h-[24px] flex-none flex items-center justify-start p-[7px] bg-[#E8EEFB]">
                        <span className='text-[9px] font-[500] text-[#1463FF]'>{crime ? crime : ''}</span>
                    </div>
                    <div className='px-[1.5rem] relative flex-auto py-[1rem]'>
                    <div className='rotate-[270deg] text-[9px] font-[500] absolute -left-[0] top-1/2 -translate-y-1/2 text-black'>Arrests</div>
                        <div  className='w-[540px] overflow-hidden mx-auto rounded-[12.33px] p-2 h-[151px] flex items-center justify-center bg-white'>
                            <Line data={chartData} options={options} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LineChartToPrint;
