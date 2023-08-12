import React,{useState, useMemo} from 'react'
import {Pie, Bar, Line } from 'react-chartjs-2'
import { UserData } from "./Data";
import { Chart as ChartJS } from "chart.js/auto";
import { dateFormat } from './dateformat'
import moment from 'moment';

import {
    useGetEventsQuery,
    useGetApprovedEventsQuery,
    useGetBookedEventsQuery,
    useGetCanceledEventsQuery
    } from '../services/eventApi'
    
import {
    useGetTransactionsQuery
    } from '../services/transactionApi'

export const PieChart = () => {

      // From Events report
      const {data:approved} =  useGetApprovedEventsQuery();
      const {data:booked} =  useGetBookedEventsQuery();
      const {data:canceled} =  useGetCanceledEventsQuery();
      // const expense = transaction?.filter(item => item.type === 'expense').reduce((acc, item) => acc + item.amount, 0);

      // console.log(booked?.length, approved?.length, canceled?.length);
        // const bookedPercentage = (booked?.length / 100) * 100;

      
        const data = {
    
        labels: ['Booked', 'Approved', 'Canceled'],
    
        datasets: [
          {
              label: 'Eevnt',
              data: [booked?.length, approved?.length, canceled?.length],
              backgroundColor: [
                "#489EE7",
                "#009688",
                "#E91E63"
              ],
              borderColor: "black",
              borderWidth: 2,
              tension: .2
          },
        ]
      }
  return (
    <Pie  data={data} />
  )
}



export const BarChart = () => {
  const {data:transaction} =  useGetTransactionsQuery();


  const income = transaction?.filter(item => item.type === 'income').reduce((acc, item) => acc + item.amount, 0);

  const expense = transaction?.filter(item => item.type === 'expense').reduce((acc, item) => acc + item.amount, 0);

const data = {
    
    labels: ['Income', 'Expense'],

    datasets: [
      {
          label: 'Transactation',
          data: [income, expense],
          backgroundColor: [
            "#4CAF50",
            "#9C27B0",
          ],
          borderColor: "black",
          borderWidth: 2,
          tension: .2
      },
    ]
  }


  return (
    <Bar  data={data} />
  )
}


