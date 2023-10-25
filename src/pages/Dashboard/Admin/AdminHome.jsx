import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { BsCart3, BsCurrencyDollar } from "react-icons/bs";
import { FaSitemap, FaUsers } from "react-icons/fa";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM d, yyyy');
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    })
    console.log(chartData)
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const demoData = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    // cicle data
    const circleData = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const CIRCLECOLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className="admin-home w-full">
            <h2 className="text-3xl mb-5">Hi, {user.displayName}</h2>
            <div className="md:flex flex-wrap gap-4">
                <div
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="bg-[#18975f] mb-3 md:mb-0 transition duration-300 hover:bg-[#ffba00]  flex items-center gap-2 py-5 rounded-md px-5 w-full h-[130px] md:w-64 "
                >
                    <div className="mr-3">
                        <BsCurrencyDollar className="text-6xl text-[#fff]" />

                    </div>
                    <div className="text-white">
                        <div className=" text-2xl mb-0">Revenue</div>
                        <div className="stat-value mb-1">${stats.revenue}</div>
                        <div className="stat-desc text-white">{formattedDate}</div>
                    </div>
                </div>
                <div
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="bg-[#0096dc] mb-3 md:mb-0 transition duration-300 hover:bg-[#cc3433]  flex items-center gap-2 py-5 rounded-md px-5 w-full h-[130px] md:w-64 "
                >
                    <div className="mr-3">
                        <FaUsers className="text-6xl text-[#fff]" />
                    </div>
                    <div className="text-white">
                        <div className=" text-2xl mb-0">New Users</div>
                        <div className="stat-value mb-1">{stats.users}</div>
                        <div className="stat-desc text-white">{formattedDate}</div>
                    </div>
                </div>
                <div
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="bg-[#c31162] mb-3 md:mb-0 transition duration-300 hover:bg-[#f37b2a] flex items-center gap-2 py-5 rounded-md px-5 w-full h-[130px] md:w-64 "
                >
                    <div className="mr-3">
                        <FaSitemap className="text-6xl text-[#fff]" />
                    </div>
                    <div className="text-white">
                        <div className=" text-2xl mb-0">Menu Items</div>
                        <div className="stat-value mb-1">{stats.products}</div>
                        <div className="stat-desc text-white">{formattedDate}</div>
                    </div>
                </div>
                <div
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="bg-[#f37b2a] mb-3 md:mb-0 h-[130px] transition duration-300 hover:bg-[#824235]  flex items-center gap-2 py-5 rounded-md px-5 w-full md:w-64"
                >
                    <div className="mr-3">
                        <BsCart3 className="text-6xl text-[#fff]" />
                    </div>
                    <div className="text-white">
                        <div className=" text-2xl mb-0">Orders</div>
                        <div className="text-white stat-value mb-1">{stats.orders}</div>
                        <div className="stat-desc text-white">{formattedDate}</div>
                    </div>
                </div>
            </div>

            <div className=" my-10">
                <div className="">
                    <BarChart
                        width={500}
                        height={300}
                        data={demoData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {demoData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;