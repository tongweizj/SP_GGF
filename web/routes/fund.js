const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const Fund = mongoose.model('fund');
const FundIncrease = mongoose.model('fundIncrease');


router.get('/', (req, res) => {
  FundIncrease.find().collation({"locale": "zh", numericOrdering:true}).sort({recent1Year:-1}).limit(100)
    .then((funds) => {
      // console.log(jds)
      res.render('fund/fundranking', {
        title: '全部基金',
        path: '/',
        fundRanking:'全部基金排行榜',
        funds
      });
    })
    .catch(() => {
      res.send('Sorry! Something went wrong.');
    });
});

router.get('/gp', (req, res) => {
  FundIncrease.find({type:"gp"}).collation({"locale": "zh", numericOrdering:true}).sort({recent1Year:-1}).limit(100)
    .then((funds) => {
      // console.log(jds)
      res.render('fund/fundranking', {
        title: '股票型基金',
        path: '/',
        fundRanking:'股票型基金排行榜',
        funds
      });
    })
    .catch(() => {
      res.send('Sorry! Something went wrong.');
    });
});

router.get('/hh', (req, res) => {
  FundIncrease.find({type:"hh"}).collation({"locale": "zh", numericOrdering:true}).sort({recent1Year:-1}).limit(100)
    .then((funds) => {
      // console.log(jds)
      res.render('fund/fundranking', {
        title: '混合型基金',
        path: '/',
        fundRanking:'混合型基金排行榜',
        funds
      });
    })
    .catch(() => {
      res.send('Sorry! Something went wrong.');
    });
});

router.get('/zq', (req, res) => {
  FundIncrease.find({type:"zq"}).collation({"locale": "zh", numericOrdering:true}).sort({recent1Year:-1}).limit(100)
    .then((funds) => {
      // console.log(jds)
      res.render('fund/fundranking', {
        title: '债券型基金',
        path: '/',
        fundRanking:'债券型基金排行榜',
        funds
      });
    })
    .catch(() => {
      res.send('Sorry! Something went wrong.');
    });
});

router.get('/zs', (req, res) => {
  FundIncrease.find({type:"zs"}).collation({"locale": "zh", numericOrdering:true}).sort({recent1Year:-1}).limit(100)
    .then((funds) => {
      // console.log(jds)
      res.render('fund/fundranking', {
        title: '指数型基金',
        path: '/',
        fundRanking:'指数型基金排行榜',
        funds
      });
    })
    .catch(() => {
      res.send('Sorry! Something went wrong.');
    });
});
router.get('/qdii', (req, res) => {
  FundIncrease.find({type:"qdii"}).collation({"locale": "zh", numericOrdering:true}).sort({recent1Year:-1}).limit(100)
    .then((funds) => {
      // console.log(jds)
      res.render('fund/fundranking', {
        title: 'QDII型基金',
        path: '/',
        fundRanking:'QDII型基金排行榜',
        funds
      });
    })
    .catch(() => {
      res.send('Sorry! Something went wrong.');
    });
});

router.get('/fof', (req, res) => {
  FundIncrease.find({type:"fof"}).collation({"locale": "zh", numericOrdering:true}).sort({recent1Year:-1}).limit(100)
    .then((funds) => {
      // console.log(jds)
      res.render('fund/fundranking', {
        title: 'FOF型基金',
        path: '/',
        fundRanking:'FOF型基金排行榜',
        funds
      });
    })
    .catch(() => {
      res.send('Sorry! Something went wrong.');
    });
});
module.exports = router;