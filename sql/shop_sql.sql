CREATE TABLE `mus`.
	`shops` ( `id` VARCHAR(32) NOT NULL COMMENT '唯一id主键' , 
	`name` VARCHAR(32) NOT NULL COMMENT '商户名' , 
	`address` VARCHAR(64) NOT NULL COMMENT '商户地址' , 
	`phone` VARCHAR(11) NOT NULL COMMENT '商户电话' , 
	`price` FLOAT NOT NULL COMMENT '价格' , 
	`distance` FLOAT NOT NULL COMMENT '距离' , 
	`latitude` FLOAT NOT NULL COMMENT '纬度' , 
	`longitude` FLOAT NOT NULL COMMENT '精度' , 
	`time` DATE NOT NULL COMMENT '放鱼时间' , 
	`nexttime` DATE NOT NULL COMMENT '下次放鱼时间' , 
	`discount` BOOLEAN NOT NULL COMMENT '折扣' , 
	`discountInfo` VARCHAR(128) NOT NULL COMMENT '折扣详情' , 
	`event` BOOLEAN NOT NULL COMMENT '活动' , 
	`eventInfo` VARCHAR(128) NOT NULL COMMENT '活动详情' , 
	`game` BOOLEAN NOT NULL COMMENT '赛事' , 
	`gameInfo` VARCHAR(128) NOT NULL COMMENT '赛事详情' , 
	PRIMARY KEY (`id`(32))) ENGINE = MyISAM COMMENT = '商户表';

INSERT INTO `shops` (`id`, `name`, `address`, `phone`, `price`, `distance`, `latitude`, `longitude`, `time`, `nexttime`, `discount`, `discountInfo`, `event`, `eventInfo`, `game`, `gameInfo`) VALUES ('mus-b482C12D-Fc9A-128E-fD77', '我米龙渔场', '香港岛黑龙江省铁西区走声路式革处', '17357826523', '93.11', '3.87', '39.9579', '116.4510', '2017-06-10', '2017-06-12', '1', '量规此场公下正放而以解之技表海影天听构何千目济军快平响本记关度生务天没要则', '1', '县回社毛史北目设取认向京队空半说北收音候难规根或京全里着带看规中性则己办压越电影极身', '0', '力打内组家验其低实好打百消那严如种白几效标资多种先长者四经小节人理率格须千务复细以千');