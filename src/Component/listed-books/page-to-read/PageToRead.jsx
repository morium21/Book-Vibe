import React from 'react'
import Navbar from '../../home/Navbar'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "The Great Gatsby", pages: 192 },
  { name: "To Kill a Mockingbird", pages: 281 },
  { name: "1984", pages: 328 },
  { name: "The Alchemist", pages: 177 },
  { name: "Pride and Prejudice", pages: 279 },
];

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

// 🔺 Custom Triangle Shape
const getPath = (x, y, width, height) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
     ${x + width / 2},${y + height / 3}
     ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
     ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
    Z
  `;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


export const PageToRead = () => {
  return (
    <>
      <Navbar />
          <div className="max-w-6xl mx-auto px-4 py-10">
        

      </div>

    </>
  )
}
