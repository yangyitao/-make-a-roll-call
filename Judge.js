


//裁判
var judge = {
	//属性
	ele: null,
	attacker: null, //攻击者
	times: 0, //第几轮
	
	//方法
	//初始化方法init
	init: function(){
		this.ele = document.getElementById("list");
		return this;
	},
	
	//开始PK
	start: function(){
		
		this.times = 0;
		this.ele.innerHTML = ""; //清空内容
		clearInterval(this.timer); //关闭之前的定时器
		
		//启动定时器, 开始PK
		this.timer = setInterval(function(){
			
			judge.times++;
			
			//攻击者发动攻击
			var obj = judge.attacker.attack();
			
			//创建li节点
			var liNode = document.createElement("li");
			liNode.innerHTML = "第" + judge.times + "轮【" + judge.attacker.name + "】" + obj.skill + obj.hurtHp + "点血量"; 
			judge.ele.appendChild(liNode);
			
			//当对手的血量小于或等于0时
			if (judge.attacker.enemy.hp <= 0) {
				clearInterval(judge.timer); //关闭定时器
				
				//添加li节点
				var liLastNode = document.createElement("li");
				liLastNode.innerHTML = "恭喜【" + judge.attacker.name + "】取得了最后的胜利!";
				liLastNode.style.color = "red";
				judge.ele.appendChild(liLastNode);
			}
			
			//交换攻击者
			judge.attacker = judge.attacker.enemy;
			
		}, 1000);
		
		
	}
	
}






