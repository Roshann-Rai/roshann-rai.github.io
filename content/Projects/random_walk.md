---
title: "Testing Random Walks in Financial Data" 
date: 2025-05-08
lastmod: 2025-05-08
url: /6/
aliases: 
    - /6/6.html
tags: ["Random walk", "Financial data", "financial market"]
author: "Roshan Rai"
description: "This article explains the techniques of testing random walk in financial data." 
summary: "Can we predict stock prices? RWH argues that stock price movements are random i.e. the past information can't be used to predict the future stock prices." 
#cover:
 #   image: "/green.png"
  #  alt: "Growth of Green Bonds, 2013-2021"
   # relative: false
plotly: true
---

<div class="thinline"></div>

Random Walk theory argues that stock price movements are random i.e. the past information can't be used to predict the future stock prices. Because of this argument of  randomness of price movements, charting (technical analysis) is useless to predict the future price movement. A simple random walk model is 

$X_t = X_{t-1}+r_t$

Where,

$X_t=log(\frac{P_t}{P_0})$

$r_t = X_t - X_{t-1} = log(\frac{P_t}{P_{t-1}})$

$r_t = \mu + \epsilon_t$

$\epsilon_t = \sigma z_t \sim N(0,\sigma^2)$

In this article, I will try to show how to test random walk hypothesis on financial data. I have followed the steps I learnt in the course [**Mathematical Methods for Quantitative Finance**](https://learning.edx.org/course/course-v1:MITx+15.455x+1T2025/home). I have used the data of NTC from Mid 2020 to Mid 2025 and divided the data into two groups: pre and post 4/12 policy of NRB to account for policy changes.[^1]

## Non-statistical Techinique
A simple technique to identify random walk is to graph stock price as a function of time. The jagged appearance of the graph supports the random walk hypothesis. The jagged appearance is due to the uncorrelation of price change at one point in time with other point in time[^2]. 

![image](/random_walk/stock_price.png)

## Volatility

![image](/random_walk/volatility.png)
![image](/random_walk/white_noise.png)

## Histogram

![image](/random_walk/histogram.png)

## Variance Plot

![image](/random_walk/variance_plot.png)

## Footnotes
[^1]: 4/12 policy of NRB is the margin lending limitation i.e. 4 crore for individual investors and 12 crore for institutional.
[^2]: A lecture on Financial Time Series as Random Walks. More information https://www3.cs.stonybrook.edu/~skiena/691/2007/lectures/lecture8.pdf

