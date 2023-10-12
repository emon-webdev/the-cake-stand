import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { BsCart3, BsCurrencyDollar } from "react-icons/bs";
import { FaSitemap, FaUsers } from "react-icons/fa";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
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

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
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
        <div className="w-full relative z-0">
            <h2 className="text-3xl mb-5">Hi, {user.displayName}</h2>
            <div className="md:flex gap-4">
                <div
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="donate-card flex items-center gap-2 py-5 rounded-md px-5 w-full h-[120px] md:w-72 bg-white"
                >
                    <div className="mr-5">
                        <BsCurrencyDollar className="text-6xl text-[#9c0f55]" />

                    </div>
                    <div className="">
                        <div className="text-[#808080] text-2xl mb-0">Revenue</div>
                        {/* <h2 className="text-3xl font-bold">$ {stats.revenue}</h2> */}
                        <div className="stat-value mb-1">${stats.revenue}</div>
                        <div className="stat-desc">{formattedDate}</div>
                    </div>
                </div>
                <div
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="donate-card flex items-center gap-2 py-5 rounded-md px-5 w-full h-[120px] md:w-72 bg-white"
                >
                    <div className="mr-5">
                        <FaUsers className="text-6xl text-[#9c0f55]" />
                    </div>
                    <div className="">
                        <div className="text-[#808080] text-2xl mb-0">New Users</div>
                        <div className="stat-value mb-1">{stats.users}</div>
                        <div className="stat-desc">{formattedDate}</div>
                    </div>
                </div>
                <div
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="donate-card flex items-center gap-2 py-5 rounded-md px-5 w-full h-[120px] md:w-72 bg-white"
                >
                    <div className="mr-5">
                        <FaSitemap className="text-6xl text-[#9c0f55]" />
                    </div>
                    <div className="">
                        <div className="text-[#808080] text-2xl mb-0">Menu Items</div>
                        <div className="stat-value mb-1">{stats.products}</div>
                        <div className="stat-desc">{formattedDate}</div>
                    </div>
                </div>
                <div
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="donate-card flex items-center gap-2 py-5 rounded-md px-5 w-full h-[120px] md:w-72 bg-white"
                >
                    <div className="mr-5">
                        <BsCart3 className="text-6xl text-[#9c0f55]" />
                    </div>
                    <div className="">
                        <div className="text-[#808080] text-2xl mb-0">Orders</div>
                        <div className="stat-value mb-1">{stats.orders}</div>
                        <div className="stat-desc">{formattedDate}</div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;