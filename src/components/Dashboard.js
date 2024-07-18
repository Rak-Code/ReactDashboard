import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { FaEye, FaShoppingCart, FaShoppingBag, FaUsers } from "react-icons/fa";

const data = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400, sales: 3000 },
  { name: "Feb", uv: 300, pv: 2400, amt: 2400, sales: 3500 },
  { name: "Mar", uv: 200, pv: 2400, amt: 2400, sales: 3200 },
  { name: "Apr", uv: 278, pv: 2400, amt: 2400, sales: 3800 },
  { name: "May", uv: 189, pv: 2400, amt: 2400, sales: 4000 },
  { name: "Jun", uv: 239, pv: 2400, amt: 2400, sales: 3900 },
  { name: "Jul", uv: 349, pv: 2400, amt: 2400, sales: 4200 },
  { name: "Aug", uv: 249, pv: 2400, amt: 2400, sales: 3800 },
  { name: "Sep", uv: 469, pv: 2400, amt: 2400, sales: 4500 },
  { name: "Oct", uv: 289, pv: 2400, amt: 2400, sales: 4700 },
  { name: "Nov", uv: 349, pv: 2400, amt: 2400, sales: 4900 },
  { name: "Dec", uv: 379, pv: 2400, amt: 2400, sales: 5000 },
];

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("revenue"); // 'revenue' or 'sales'

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <main className="p-4 flex-1 ml-64 ">
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 h-50 bg-white shadow rounded">
          <FaEye className="text-blue-500 text-4xl mb-2" />
          <p className="text-2xl font-semibold">$3.456K</p>
          <h3 className="">
            Total Views{" "}
            <span className="text-green-500 ml-20">0.43% &#9650;</span>
          </h3>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <FaShoppingCart className="text-blue-500 text-4xl mb-2" />
          <p className="text-2xl font-bold">$45.2K</p>
          <h3 className="">
            Total Profit{" "}
            <span className="text-green-500 ml-20">4.35% &#9650;</span>
          </h3>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <FaShoppingBag className="text-blue-500 text-4xl mb-2" />
          <p className="text-2xl font-bold">$2.450K</p>
          <h3 className="">
            Total Product{" "}
            <span className="text-green-500 ml-20">2.59% &#9650;</span>
          </h3>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <FaUsers className="text-blue-500 text-4xl mb-2" />
          <p className="text-2xl font-bold">$3.456K</p>
          <h3 className="">
            Total Users{" "}
            <span className="text-red-500 ml-20">0.95% &#9660;</span>
          </h3>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-white shadow rounded p-4">
          <div className="flex items-center mb-4">
            <div className=" flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className=" text-lgform-radio text-darkblue-500"
                  checked={selectedOption === "revenue"}
                  onChange={() => handleOptionChange("revenue")}
                />
                <span className="ml-2 text-lg text-blue-500">
                  Total Revenue
                </span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-lightblue-500"
                  checked={selectedOption === "sales"}
                  onChange={() => handleOptionChange("sales")}
                />
                <span className="ml-2 text-lg text-blue-500">Total Sales</span>
              </label>
            </div>
          </div>
          <div className="text-gray-800 text-xs -mt-3 mb-2">
            12.04.2022 - 12.05.2022{" "}
            <span className="text-gray-800 ml-4 text-xs -mt-3 mb-2">
              12.04.2022 - 12.05.2022
            </span>
          </div>

          <LineChart width={800} height={400} data={data}>
            <Line
              type="monotone"
              dataKey={selectedOption === "revenue" ? "uv" : "sales"}
              stroke="#8884d8"
            />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="bg-white shadow rounded p-4">
                    <h3 className="text-lg ">Profit this week</h3>
                    <div className="flex justify-start  mt-2 mb-1">
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span> Revenue</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 ml-2 bg-green-500 rounded-full"></div>
                            <span> Sales</span>
                        </div>
                    </div>
               
                    <BarChart width={300} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="uv" fill="#8884d8" />
                        <Bar dataKey="pv" fill="#82ca9d" />
                    </BarChart>
                    </div>
            </div>
        </main>
  );
};

export default Dashboard;
