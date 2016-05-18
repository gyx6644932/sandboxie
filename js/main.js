var clientWidth='';
$( document ).ready(function() {
	// 路径配置
    require.config({
        paths: {
            echarts: 'build/dist'
        }
    });
    writeChart();
    writeChart2();
    writeChart3();
    writeChart4();
   // run2();
    run();
    var clientWidth= document.body.clientWidth;
   // $(".rotationT90").css('height',clientWidth/3);
    //alert(clientWidth);
    
    $(".actionBtn").click(function(){
    	if(this.id.length != 0){
    		$('#myModal').modal();
    		TemplateDiv(this.id);
    	}else{
    		return;
    	}
    	
    })
});

function writeChart(){
	 // 使用
   require(
       [
           'echarts',
           'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
       ],
       function (ec) {
           // 基于准备好的dom，初始化echarts图表
           var myChart = ec.init(document.getElementById('main')); 
           
           option = {
           	    
           	   /* tooltip : {
           	        trigger: 'axis'
           	    },*/
           	    legend: {
           	        data:['M1增长','M2增长','M3增长']
           	    },
           	    
           	    calculable : true,
           	    xAxis : [
           	        {
           	            type : 'category',
           	            data : ['F1','F2','F3','F4']
           	        }
           	    ],
           	    yAxis : [
           	        {
           	            type : 'value'
           	        }
           	    ],
           	    series : [
           	        {
           	            name:'M1增长',
           	            type:'bar',
           	            data:[2.0, 4.9, 7.0, 23.2],
           	          
           	            markLine : {
           	                data : [
           	                    {type : 'average', name: '平均值'}
           	                ]
           	            }
           	        },
           	       {
           	            name:'M2增长',
           	            type:'bar',
           	            data:[2.0, 4.9, 7.0, 23.2],
           	           
           	            markLine : {
           	                data : [
           	                    {type : 'average', name: '平均值'}
           	                ]
           	            }
           	        },
           	      
           	        {
           	            name:'M3增长',
           	            type:'bar',
           	            data:[2.6, 5.9, 9.0, 26.4],
           	           
           	            markLine : {
           	                data : [
           	                    {type : 'average', name : '平均值'}
           	                ]
           	            }
           	        }
           	    ]
           	};
           	                    
   
           // 为echarts对象加载数据 
           myChart.setOption(option); 
       }
   );
}


function writeChart2(){
	 // 使用
  require(
      [
          'echarts',
          'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
      ],
      function (ec) {
          // 基于准备好的dom，初始化echarts图表
          var myChart = ec.init(document.getElementById('main2')); 
          
          option = {
          	    
          	   /* tooltip : {
          	        trigger: 'axis'
          	    },*/
          	    legend: {
          	        data:['M1增长','M2增长','M3增长']
          	    },
          	    
          	    calculable : true,
          	    xAxis : [
          	        {
          	            type : 'category',
          	            data : ['F1','F2','F3','F4']
          	        }
          	    ],
          	    yAxis : [
          	        {
          	            type : 'value'
          	        }
          	    ],
          	    series : [
          	        {
          	            name:'M1增长',
          	            type:'bar',
          	            data:[2.0, 4.9, 7.0, 23.2],
          	          
          	            markLine : {
          	                data : [
          	                    {type : 'average', name: '平均值'}
          	                ]
          	            }
          	        },
          	       {
          	            name:'M2增长',
          	            type:'bar',
          	            data:[2.0, 4.9, 7.0, 23.2],
          	           
          	            markLine : {
          	                data : [
          	                    {type : 'average', name: '平均值'}
          	                ]
          	            }
          	        },
          	      
          	        {
          	            name:'M3增长',
          	            type:'bar',
          	            data:[2.6, 5.9, 9.0, 26.4],
          	           
          	            markLine : {
          	                data : [
          	                    {type : 'average', name : '平均值'}
          	                ]
          	            }
          	        }
          	    ]
          	};
          	                    
  
          // 为echarts对象加载数据 
          myChart.setOption(option); 
      }
  );
}

function writeChart3(){
	 // 使用
 require(
     [
         'echarts',
         'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
     ],
     function (ec) {
         // 基于准备好的dom，初始化echarts图表
         var myChart = ec.init(document.getElementById('main3')); 
         
         option = {
         	    
         	   /* tooltip : {
         	        trigger: 'axis'
         	    },*/
         	    legend: {
         	        data:['M1增长','M2增长','M3增长']
         	    },
         	    
         	    calculable : true,
         	    xAxis : [
         	        {
         	            type : 'category',
         	            data : ['F1','F2','F3','F4']
         	        }
         	    ],
         	    yAxis : [
         	        {
         	            type : 'value'
         	        }
         	    ],
         	    series : [
         	        {
         	            name:'M1增长',
         	            type:'bar',
         	            data:[2.0, 4.9, 7.0, 23.2],
         	          
         	            markLine : {
         	                data : [
         	                    {type : 'average', name: '平均值'}
         	                ]
         	            }
         	        },
         	       {
         	            name:'M2增长',
         	            type:'bar',
         	            data:[2.0, 4.9, 7.0, 23.2],
         	           
         	            markLine : {
         	                data : [
         	                    {type : 'average', name: '平均值'}
         	                ]
         	            }
         	        },
         	      
         	        {
         	            name:'M3增长',
         	            type:'bar',
         	            data:[2.6, 5.9, 9.0, 26.4],
         	           
         	            markLine : {
         	                data : [
         	                    {type : 'average', name : '平均值'}
         	                ]
         	            }
         	        }
         	    ]
         	};
         	                    
 
         // 为echarts对象加载数据 
         myChart.setOption(option); 
     }
 );
}


function writeChart4(){
	 // 使用
require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main4')); 
        
        option = {
        	    
        	   /* tooltip : {
        	        trigger: 'axis'
        	    },*/
        	    legend: {
        	        data:['当期产品生产情况']
        	    },
        	    
        	    calculable : true,
        	    xAxis : [
        	        {
        	            type : 'category',
        	            data : ['P1','P2','P3','P4']
        	        }
        	    ],
        	    yAxis : [
        	        {
        	            type : 'value'
        	        }
        	    ],
        	    series : [
        	        {
        	            name:'M1增长',
        	            type:'bar',
        	            data:[300, 500, 600, 700],
        	          
        	            markLine : {
        	                data : [
        	                    {type : 'average', name: '平均值'}
        	                ]
        	            }
        	        }
        	    ]
        	};
        	                    

        // 为echarts对象加载数据 
        myChart.setOption(option); 
    }
);
}


function TemplateDiv(id){
	$('#myModal').attr('class','modal fade');
	var label,btn;
	if(id == 'marketingFunds'){
		label='营销经费申请';
		btn='申请';
		var str=' <table  class="table">'
             +'<tr>' 
                  +'<td>剩余总经费：</td>'
                  +'<td>200000</td>'
             +'</tr>' 
             +'<tr>' 
                 +'<td>剩余营销经费：</td>' 
                 +'<td>2000</td>' 
             +'</tr>'
             +'<tr>' 
                 +'<td colspan="2" >' 
                    +'<input class="form-control" style="width:100%;" placeholder="请输入今年所需要的经费额度">'   
                 +'</td>' 
             +'</tr>' 
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id=='marketingSurvey'){
		label='市场调研';
		btn='调研';
		var str=' <table  class="table">'
             +'<tr>' 
                  +'<td>市场调研费用所需要：</td>'
                  +'<td>100K/年</td>'
             +'</tr>' 
            
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'marketingTransport'){
		label='渠道产品运输申请';
		btn='申请';
		var str=' <table  class="table">'
             +'<tr>' 
                  +'<td></td>'
                  +'<td><button type="button" class="btn btn-primary">直销</button></td>'
                  +'<td><button type="button" class="btn btn-primary">分销</button></td>'
             +'</tr>' 
             +'<tr>' 
                 +'<td>M1：</td>' 
                 +'<td>P1：20</td>' 
                 +'<td>P2：20</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td>M2：</td>' 
	             +'<td>P2：20</td>' 
	             +'<td>P3：20</td>' 
	         +'</tr>'
		     +'<tr>' 
		         +'<td>M3：</td>' 
		         +'<td>P3：20</td>' 
		         +'<td>P4：20</td>' 
		     +'</tr>'
		     +'<tr>' 
	             +'<td colspan="3" style="text-align:center;">所需要运输费用：100K</td>' 
	         +'</tr>' 
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'marketingRecruitment'){
		label='人员招聘审核';
		btn='审核';
		var str=' <table  class="table">'
             +'<tr>' 
                  +'<td><button type="button" class="btn btn-primary">直销</button></td>'
                  +'<td><button type="button" class="btn btn-primary">分销</button></td>'
             +'</tr>' 
             +'<tr>' 
                 +'<td>M1招聘人数：5人</td>' 
                 +'<td>费用：10K</td>' 
             +'</tr>'
             +'<tr>' 
	            
	             +'<td>M2招聘人数：6人</td>' 
	             +'<td>费用：12K</td>' 
	         +'</tr>'
		     +'<tr>' 
		         +'<td>M3招聘人数：7人</td>' 
		         +'<td>费用：14K</td>' 
		     +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'managerISO'){
		label='ISO认证';
		btn='认证';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td><input type="checkbox">ISO9001认证</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td><input type="checkbox">ISO9002认证</td>' 
	         +'</tr>'
		   
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'managerProduction'){
		label='产品生产审核';
		btn='审核';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td><input type="checkbox">P1生产20个，成本：40K</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td><input type="checkbox">P2生产20个，成本：40K</td>' 
	         +'</tr>'
	         +'<tr>' 
                 +'<td><input type="checkbox">P3生产20个，成本：40K</td>' 
             +'</tr>'
             +'<tr>' 
                 +'<td><input type="checkbox">P4生产20个，成本：40K</td>' 
             +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'managerDiscount'){
		label='订单贴现';
		btn='贴现';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>本期暂无可贴现的订单</td>' 
             +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'managerFundsApply'){
		label='营销经费申请审核';
		btn='通过';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>本年度营销经费申请：<font color="red">1000K</font></td>' 
             +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'managerBackFunds'){
		label='营销经费回账申请';
		btn='申请';
		var str=' <table  class="table">'
			 +'<tr>' 
	             +'<td><input type="checkbox">破产申请</td>' 
	             +'<td></td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td><input type="checkbox">融资申请</td>'
	             +'<td><input class="form-control"  placeholder="融资额度"></td>'
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'managerClearance'){
		label='产品生产审核';
		btn='审核';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td><input type="checkbox">P1生产20个，成本：40K</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td><input type="checkbox">P2生产20个，成本：60K</td>' 
	         +'</tr>'
	         +'<tr>' 
                 +'<td><input type="checkbox">P3生产20个，成本：80K</td>' 
             +'</tr>'
             +'<tr>' 
                 +'<td><input type="checkbox">P4生产20个，成本：100K</td>' 
             +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'managerOther'){
		label='其他申请';
		btn='申请';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>剩余营销经费：2000</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td><input class="form-control" style="width:100%;" placeholder="请输入需要回账的金额"></td>' 
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotation180');
	}else if(id == 'distributionMan'){
		label='业务员管理';
		btn='招聘';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>剩余业务员人数：10人</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td><input class="form-control" style="width:100%;" placeholder="请输入需要招聘的分销部业务人员数"></td>' 
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotationT90');
	}else if(id == 'distributionDelivery'){
		label='分销商交货';
		btn='确认';
		var str=' <table  class="table">'
             
             +'<tr>' 
	             +'<td><input class="form-control" style="width:100%;" placeholder="在第四期才能进行分销商交货"></td>' 
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotationT90');
	}else if(id == 'distributionManage'){
		label='分销商管理';
		btn='确认';
		var str=' <table  class="table">'
             
             +'<tr>' 
	             +'<td>暂无已招募的分销商</td>' 
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotationT90');
	}else if(id == 'distributionRecruit'){
		label='分销商招募';
		btn='参加';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td><input type="checkbox">M1市场</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td><input type="checkbox">M2市场</td>' 
	         +'</tr>'
	         +'<tr>' 
                 +'<td><input type="checkbox">M3市场</td>' 
             +'</tr>'
             +'<tr>' 
                 +'<td><font color="red">请选择要进行招募的市场</font></td>' 
             +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotationT90');
	}else if(id == 'distributionTransport'){
		label='分销商产品运输申请';
		btn='申请';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>库存：</td>'
                 +'<td>P1：20</td>' 
                 +'<td>P2：30</td>' 
                 +'<td>P3：40</td>' 
                 +'<td>P4：50</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td></td>'
	             +'<td colspan="2">P1:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td colspan="2">P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td></td>'
	             +'<td colspan="2">P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td colspan="2">P3:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td></td>'
	             +'<td colspan="2">P3:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td colspan="2">P4:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotationT90');
	}else if(id == 'directMan'){
		label='业务员管理';
		btn='招聘';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>剩余业务员人数：10人</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td><input class="form-control" style="width:100%;" placeholder="请输入需要招聘的直销部业务人员数"></td>' 
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotationT-90');
	}else if(id == 'directPromotion'){
		label='直销部市场促销';
		btn='投入';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>上年度促销费用：50K</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td>本年度市场促销投入</td>' 
	         +'</tr>'
             +'<tr>' 
	             +'<td><input class="form-control" style="width:100%;" placeholder="请输入需要招聘的直销部业务人员数"></td>' 
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotationT-90');
	}else if(id == 'directManager'){
		label='直销部管理';
		btn='确认';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>M1直销部</td>'
                 +'<td><button type="button" class="btn btn-info btn-sm">维护</button></td>' 
                 +'<td><button type="button" class="btn btn-info btn-sm">解除</button></td>'  
             +'</tr>'
             +'<tr>' 
	             +'<td>M2直销部</td>'
	             +'<td><button type="button" class="btn btn-info btn-sm">解除</button></td>' 
	             +'<td><button type="button" class="btn btn-info btn-sm">解除</button></td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td>M3直销部</td>'
	             +'<td><button type="button" class="btn btn-info btn-sm">解除</button></td>' 
	             +'<td><button type="button" class="btn btn-info btn-sm">解除</button></td>'
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotationT-90');
	}else if(id == 'directTransport'){
		label='直销部商产品运输申请';
		btn='申请';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>库存：</td>'
                 +'<td>P1：20</td>' 
                 +'<td>P2：30</td>' 
                 +'<td>P3：40</td>' 
                 +'<td>P4：50</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td >M1：</td>'
	             +'<td colspan="2">P1:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td colspan="2">P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td >M2：</td>'
	             +'<td colspan="2">P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td colspan="2">P3:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td >M3：</td>'
	             +'<td colspan="2">P3:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td colspan="2">P4:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	        
          +'</table>'
          $('#modalBody').html(str);
		  $('#myModal').addClass('rotationT-90');
	}else if(id == 'production'){
		label='产品生产';
		btn='生产';
		var str=' <table  class="table">'
             +'<tr>'
	             +'<td>P1:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td>P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td>P3:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td>P4:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		  
	}else if(id == 'productClearance'){
		label='产品清仓';
		btn='清仓';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>库存：</td>'
                 +'<td>P1：20</td>' 
                 +'<td>P2：30</td>' 
                 +'<td>P3：40</td>' 
                 +'<td>P4：50</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td rowspan="2">清仓：</td>'
	             +'<td colspan="2">P1:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td colspan="2">P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td colspan="2">P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td colspan="2">P3:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	        
          +'</table>'
          $('#modalBody').html(str);
		 
	}else if(id == 'productTransport'){
		label='产品运输';
		btn='运输';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>市场：</td>'
                 +'<td><button type="button" class="btn btn-info btn-sm">M1</button></td>' 
                 +'<td><button type="button" class="btn btn-info btn-sm">M2</button></td>' 
                 +'<td><button type="button" class="btn btn-info btn-sm">M3</button></td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td>渠道：</td>'
	             +'<td><button type="button" class="btn btn-info btn-sm">直销渠道</button></td>' 
	             +'<td></td>' 
	             +'<td><button type="button" class="btn btn-info btn-sm">分销渠道</button></td>' 
	         +'</tr>'
             +'<tr>' 
	             +'<td rowspan="2">清仓：</td>'
	             +'<td >P1:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td></td>'
	             +'<td >P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	         +'<tr>' 
	            
	             +'<td >P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td></td>'
	             +'<td >P3:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	        
          +'</table>'
          $('#modalBody').html(str);
		  
	}else if(id == 'productTransferCargo'){
		label='产品调货';
		btn='调货';
		var str=' <table class="table">'
             +'<tr>' 
                 +'<td colspan="3">调出市场产品剩余：</td>'
             +'</tr>'
             +'<tr>' 
	             +'<td rowspan="2"><select><option>M1</option><option>M2</option><option>M3</option></select></td>'
	             +'<td >P1:20个</td>'
	             +'<td >P2:30个</td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td >P1:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	             +'<td >P2:<input class="form-control" style="width:30%;" placeholder="数量"></td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td colspan="3">调入市场产品剩余：</td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td rowspan="2"><select><option>M1</option><option>M2</option><option>M3</option></select></td>'
	             +'<td >P2:30个</td>'
	             +'<td >P3:20个</td>'
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		 
	}else if(id == 'serviceManage'){
		label='客服人员管理';
		btn='招聘';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>剩余客服人员数量：10人</td>' 
             +'</tr>'
            
             +'<tr>' 
	             +'<td><input class="form-control" style="width:100%;" placeholder="请输入需要招聘的客服人员数"></td>' 
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
		 
	}else if(id == 'serviceReturn'){
		label='产品退换货服务';
		btn='确认';
		var str=' <table  class="table">'
             +'<tr>' 
                 +'<td>M1市场营销额：500K，退换货额：20K</td>' 
             +'</tr>'
             +'<tr>' 
	             +'<td>M2市场营销额：600K，退换货额：30K</td>' 
	         +'</tr>'
	         +'<tr>' 
	             +'<td>M3市场营销额：800K，退换货额：40K</td>' 
	         +'</tr>'
             
          +'</table>'
          $('#modalBody').html(str);
		 
	}else if(id == 'service'){
		label='产品售后服务';
		btn='调货';
		var str=' <table class="table">'
           
             +'<tr>' 
	             +'<td rowspan="2">M1市场售出：</td>'
	             +'<td >P1:20个</td>'
	             +'<td >P2:30个</td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td colspan="2">售后服务费用：20K</td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td rowspan="2">M2市场售出：</td>'
	             +'<td >P1:20个</td>'
	             +'<td >P2:30个</td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td colspan="2">售后服务费用：20K</td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td rowspan="2">M3市场售出：</td>'
	             +'<td >P1:20个</td>'
	             +'<td >P2:30个</td>'
	         +'</tr>'
	         +'<tr>' 
	             +'<td colspan="2">售后服务费用：20K</td>'
	         +'</tr>'
          +'</table>'
          $('#modalBody').html(str);
	}
	
	$("#myModalLabel").html(label);
	$('#modalBtn').html(btn);
}


