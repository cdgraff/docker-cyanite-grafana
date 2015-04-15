/*! grafana - v1.9.1 - 2014-12-29
 * Copyright (c) 2014 Torkel Ödegaard; Licensed Apache License */

define(["angular","lodash","moment","store"],function(a,b,c,d){function e(a,d,e){this.type=a,this.title=d,this.data=e,this.time=c().format("hh:mm:ss"),e.config&&(this.method=e.config.method,this.elapsed=(new Date).getTime()-e.config.$grafana_timestamp+" ms",e.config.params&&e.config.params.q&&(this.field2=e.config.params.q),b.isString(e.config.data)&&(this.field2=e.config.data),200!==e.status&&(this.error=!0,this.field3=e.data),b.isArray(e.data)&&this.extractTimeseriesInfo(e.data))}var f=a.module("grafana.controllers"),g=d.getBool("grafanaConsole");if(g){var h=[];e.prototype.extractTimeseriesInfo=function(a){if(0!==a.length){var c=0,d=!1;a[0].datapoints&&(c=b.reduce(a,function(a,b){return a+b.datapoints.length},0),d=!0),a[0].columns&&(c=b.reduce(a,function(a,b){return a+b.points.length},0),d=!0),d&&(this.field1="("+a.length+" series",this.field1+=", "+c+" points)")}},f.config(["$provide","$httpProvider",function(a,b){a.factory("mupp",function(a){return{request:function(a){return a.inspect&&(a.$grafana_timestamp=(new Date).getTime()),a},response:function(a){return a.config.inspect&&h.push(new e(a.config.inspect.type,a.config.url,a)),a},requestError:function(b){return console.log("requestError",b),a.reject(b)},responseError:function(b){var c=b.config.inspect||{type:"error"};return h.push(new e(c.type,b.config.url,b)),a.reject(b)}}}),b.interceptors.push("mupp")}]),f.controller("ConsoleCtrl",["$scope",function(a){a.events=h}])}});