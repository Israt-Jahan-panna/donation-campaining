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
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
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
    <div >
      <div>
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
        <p>Your Donation</p>
        <p>Total Donation</p>
      
    </div>
    
  );
};

export default Statistics;
