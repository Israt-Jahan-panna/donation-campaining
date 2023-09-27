import React, { useCallback, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const [donationsData, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
 
  const {id} =useParams();
  
  const donations = useLoaderData();
  
      const donation = donations.find((donation)=>donation.id==id)
      // console.log(donation)
 
  console.log(donations);
  console.log(donationsData);
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("No data found no worries please select your donation item  ");
    }
  }, []);
  



  // piecharts

  const data = [
    { name: "Donations", value: donations.length },
    { name: "Donations Data", value: donationsData.length }
  ];
  
  const COLORS = ["#FF444A", "#00C49F"];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className=" mx-auto" >
      <div className="flex mx-auto justify-center items-center">
      <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
      </div>
       <div className="flex mx-auto justify-center items-center">
       <div className="flex justify-center items-center mr-5">
        <p className=" text-lg ">Your Donation </p> 
        <p className="text-[#00C49F] ml-4 w-14  bg-[#00C49F] rounded-2xl  px-10 py-1"> </p>
        </div>
        <div className="flex justify-center items-center ">
        <p className=" text-lg ">Total Donation </p> 
        <p className="text-[#FF444A] ml-4 w-14  bg-[#FF444A] rounded-2xl  px-10 py-1"> </p>
        </div>
       </div>
      
    </div>
    
  );
};

export default Statistics;
