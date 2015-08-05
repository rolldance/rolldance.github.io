/*
 * Yuan Ren｜任远
 * 财新数据新闻与可视化实验室 | Data Journalism & Visualization Lab
 * 2014 08
 */
 /*编辑：田川
设计：王诗韵
开发：邢其超

项目指导：黄晨、任远
监制：黄志敏

数据可视化实验室
Data Visualization Lab

Logo*/

var OfficerData = [
{name:"熊伟", age:"5", dob:"1962", pob:"", school:"", region:"", system:"", resume:"1962年9月出生，原宜昌市委常委、市政协党组副书记、市委统战部部长", id:"person0",name_en:"cairongsheng",rank:"0",id2:"persons0"}, 
{name:"谭春玉", age:"5", dob:"1955", pob:"", school:"", region:"", system:"", resume:"1955年2月出生原湖北省宜昌市人大常委会副主任", id:"person1",name_en:"chenanzhong",rank:"0",id2:"persons1"}, 
{name:"刘文", age:"5", dob:"", pob:"", school:"", region:"", system:"", resume:"央视纪录频道原总监", id:"person2",name_en:"chenbaihuai",rank:"0",id2:"persons2"}, 
{name:"朱中华", age:"5", dob:"1954", pob:"", school:"", region:"", system:"", resume:"1954年5月出生，黄石市人大常委会党组书记", id:"person3",name_en:"chentiexin",rank:"0",id2:"persons3"}, 
{name:"李威", age:"4", dob:"", pob:"", school:"", region:"", system:"", resume:"原大连中院院长", id:"person4",name_en:"jiangshan",rank:"0",id2:"persons4"}, 
{name:"芮成钢", age:"5", dob:"1977", pob:"安徽", school:"外交学院", region:"", system:"", resume:"1977年生，央视财经频道主持人", id:"person5",name_en:"dushanxue",rank:"0",id2:"persons5"}, 
{name:"李勇", age:"5", dob:"", pob:"", school:"中国人民大学", region:"", system:"", resume:"CCTV-2财经频道副总监", id:"person6",name_en:"guoyouming",rank:"0",id2:"persons6"}, 
{name:"张田欣", age:"3", dob:"1955", pob:"云南", school:"昆明师范学院", region:"", system:"", resume:"1995年生，曾任云南省委常委、昆明市委书记", id:"person7",name_en:"hanxiancong",rank:"0",id2:"persons7"}, 
{name:"付毅", age:"4", dob:"", pob:"", school:"", region:"四川", system:"四川", resume:"1963年出生，成都市政协副主席，曾任成都市委、市政府副秘书长，成都市发改委主任", id:"person8",name_en:"jindaoming",rank:"0",id2:"persons8"}, 
{name:"杨刚", age:"3", dob:"1953", pob:"新疆", school:"新疆大学", region:"", system:"", resume:"1953年生，政协第十二届全国委员会经济委员会原副主任", id:"person9",name_en:"liaoshaohua",rank:"0",id2:"persons9"}, 
{name:"韩先聪", age:"3", dob:"1955", pob:"安徽", school:"安徽农学院", region:"", system:"", resume:"1955出生，安徽省政协副主席", id:"person10",name_en:"lingzhengce",rank:"0",id2:"persons10"}, 
{name:"谭力", age:"3", dob:"1955", pob:"重庆", school:"四川省高县师范学校", region:"四川海南", system:"四川海南", resume:"1955年出生，海南省委常委、副省长，海南国际旅游岛工委书记，曾任绵阳市委书记。", id:"person11",name_en:"zhuzuoli",rank:"0",id2:"persons11"}, 
{name:"万庆良", age:"3", dob:"1964", pob:"广东", school:"嘉应师范专科学校", region:"广东", system:"广东", resume:"1964年出生，广东省委常委，曾任广州市委书记、市长", id:"person12",name_en:"luoou",rank:"0",id2:"persons12"}, 
{name:"令政策", age:"3", dob:"1952", pob:"山西", school:"山西大学", region:"山西", system:"山西", resume:"1952年出生，山西省政协副主席，曾任山西省发改委主任。", id:"person13",name_en:"quanjunliang",rank:"0",id2:"persons13"}, 
{name:"阳宝华", age:"3", dob:"1947", pob:"湖南", school:"湖南省委党校", region:"湖南", system:"湖南", resume:"1947年出生，落马时已退休，曾任湖南省政协副主席、长沙、岳阳市委书记。", id:"person14",name_en:"shenpeiping",rank:"0",id2:"persons14"}, 
{name:"杜善学", age:"3", dob:"1956", pob:"山西", school:"山西财经大学", region:"山西", system:"山西", resume:"1956年出生，山西省委常委、副省长。", id:"person15",name_en:"surong",rank:"0",id2:"persons15"}, 
{name:"赵智勇", age:"3", dob:"1955", pob:"河北", school:"西南财经大学", region:"江西", system:"江西", resume:"1955年出生，原中共江西省委常委、省委秘书长。", id:"person16",name_en:"tanli",rank:"0",id2:"persons16"}, 
{name:"万庆良", age:"3", dob:"1964", pob:"广东", school:"华南理工大学", region:"广东", system:"广东", resume:"1964年出生，广州市原市委书记。", id:"person17",name_en:"tanxiwei",rank:"0",id2:"persons17"}, 
{name:"苏荣", age:"1", dob:"1948", pob:"吉林", school:"吉林大学", region:"吉林青海甘肃江西", system:"吉林青海甘肃江西", resume:"1948年出生，全国政协副主席，曾任江西省委书记。", id:"person18",name_en:"tongmingqian",rank:"0",id2:"persons18"}, 
{name:"徐才厚", age:"1", dob:"1943", pob:"辽宁", school:"哈尔滨军事工程学院", region:"", system:"", resume:"1943年出生，中央军委原副主席，十七届中央政治局委员。", id:"person19",name_en:"wangjunguo",rank:"0",id2:"persons19"}, 
{name:"王银旺", age:"5", dob:"1959", pob:"山西", school:"", region:"山西", system:"山西", resume:"1959年出生，山西阳泉市平定县委书记。", id:"person20",name_en:"wangsuyi",rank:"0",id2:"persons20"}, 
{name:"梁波", age:"5", dob:"", pob:"", school:"东南大学", region:"", system:"", resume:"国家能源局电力司原副司长。", id:"person21",name_en:"wangwenke",rank:"0",id2:"persons21"}, 
{name:"郑兴华", age:"5", dob:"1959", pob:"湖北", school:"湖北省委党校", region:"湖北", system:"湖北", resume:"1959年出生，宜昌市原副市长。", id:"person22",name_en:"wanqingliang",rank:"0",id2:"persons22"}, 
{name:"关守仲", age:"5", dob:"", pob:"", school:"东南大学", region:"安徽", system:"安徽", resume:"国网安徽电力副总。", id:"person23",name_en:"wuchangshun",rank:"0",id2:"persons23"}, 
{name:"施维雄", age:"5", dob:"", pob:"福建", school:"香港公开大学", region:"福建", system:"福建", resume:"福建省地税局副局长。", id:"person24",name_en:"xugefei",rank:"0",id2:"persons24"}, 
{name:"叶万勇", age:"5", dob:"1953", pob:"湖北", school:"", region:"", system:"", resume:"1953年，原四川省军区政委。", id:"person25",name_en:"yangbaohua",rank:"0",id2:"persons25"}, 
{name:"谭栖伟", age:"3", dob:"1954", pob:"重庆", school:"重庆市委党校", region:"重庆", system:"重庆", resume:"1954年出生，原重庆市人大常委会副主任、党组副书记。", id:"person26",name_en:"yaomugen",rank:"0",id2:"persons26"}, 
{name:"朱长林", age:"4", dob:"1960", pob:"河南", school:"同济大学", region:"河南湖南四川 中央", system:"河南湖南四川 中央", resume:"1960年出生，原国家电网华北分部主任、党委书记。", id:"person27",name_en:"zhangtianxin",rank:"0",id2:"persons27"}, 
{name:"魏健", age:"4", dob:"", pob:"", school:"", region:"中央", system:"中央", resume:"原中央纪委第四纪检监察室主任2014年5月被查。", id:"person28",name_en:"",rank:"0",id2:"persons28"}, 
{name:"刘庆成", age:"4", dob:"1961", pob:"湖南", school:"中国地质大学", region:"北京四川江苏上海", system:"北京四川江苏上海", resume:"1961年出生，东华理工大学校长。", id:"person29",name_en:"",rank:"0",id2:"persons29"}, 
{name:"罗欧", age:"4", dob:"1956", pob:"广东", school:"", region:"广东", system:"广东", resume:"1956年生，广东省政府副秘书长、省打私办主任。", id:"person30",name_en:"",rank:"0",id2:"persons30"}, 
{name:"徐曙明", age:"4", dob:"", pob:"", school:"", region:"辽宁", system:"辽宁", resume:"原辽宁省国有资产监督管理委员会副巡视员、省（中）直企业工会主席。", id:"person31",name_en:"",rank:"0",id2:"persons31"}, 
{name:"薄启亮", age:"5", dob:"1962", pob:"", school:"中国石油大学", region:"", system:"", resume:"1962年出生，中国石油天然气股份有限公司副总裁。", id:"person32",name_en:"",rank:"0",id2:"persons32"}, 
{name:"孙卫东", age:"5", dob:"", pob:"", school:"", region:"", system:"", resume:"甘肃玉门油田公司原副总经理。", id:"person33",name_en:"",rank:"0",id2:"persons33"}, 
{name:"靳瑞林", age:"5", dob:"1957", pob:"山西", school:"忻州地委党校", region:"山西", system:"山西", resume:"1957年出生，山西大同市原副市长。", id:"person34",name_en:"",rank:"0",id2:"persons34"}, 
{name:"张中生", age:"5", dob:"1952", pob:"山西", school:"中央党校", region:"山西", system:"山西", resume:"1952年出生，山西吕梁市原副市长。", id:"person35",name_en:"",rank:"0",id2:"persons35"}, 
{name:"胡铁辉", age:"5", dob:"1951", pob:"湖南", school:"湖南医科大学", region:"湖南", system:"湖南", resume:"1951年出生，原任中南大学党委常委、副校长。", id:"person36",name_en:"",rank:"0",id2:"persons36"}, 
{name:"王侃", age:"5", dob:"1957", pob:"湖北", school:"华中科技大学", region:"湖北", system:"湖北", resume:"1957年出生，原湖北省政府国有资产监督管理委员会副主任。", id:"person37",name_en:"",rank:"0",id2:"persons37"}, 
{name:"梁国英", age:"5", dob:"1958", pob:"广东", school:"中央党校", region:"广东", system:"广东", resume:"1958年出生，原中共东莞市委常委、常务副市长。", id:"person38",name_en:"",rank:"0",id2:"persons38"}, 
{name:"魏鹏远", age:"5", dob:"", pob:"", school:"", region:"中央", system:"中央", resume:"国家能源局煤炭司原副司长。", id:"person39",name_en:"",rank:"0",id2:"persons39"}, 
{name:"郭焕波", age:"5", dob:"", pob:"", school:"", region:"云南", system:"云南", resume:"原昆明市农业局党委书记、局长。", id:"person40",name_en:"",rank:"0",id2:"persons40"}, 
{name:"陈博", age:"5", dob:"", pob:"", school:"", region:"云南", system:"云南", resume:"原昆明市农业局副局长。", id:"person41",name_en:"",rank:"0",id2:"persons41"}, 
{name:"蔡勇", age:"5", dob:"1971", pob:"", school:"", region:"重庆", system:"重庆", resume:"1971年生，重庆市涪陵区委常委。", id:"person42",name_en:"",rank:"0",id2:"persons42"}, 
{name:"曹立新", age:"5", dob:"", pob:"", school:"", region:"山西", system:"山西", resume:"中纪委第六纪检监察室三处处长，分管山西。", id:"person43",name_en:"",rank:"0",id2:"persons43"}, 
{name:"谭建忠", age:"5", dob:"1959", pob:"河南", school:"河南省委党校", region:"河南", system:"河南", resume:"1959年生，河南省洛阳市委常委、秘书长。", id:"person44",name_en:"",rank:"0",id2:"persons44"}, 
{name:"任鹏举", age:"5", dob:"1959", pob:"北京", school:"首都师范大学", region:"北京", system:"北京", resume:"1959年生，北京市昌平区政协副主席。", id:"person45",name_en:"",rank:"0",id2:"persons45"}, 
{name:"许永盛", age:"5", dob:"1966", pob:"山东", school:"天津大学", region:"", system:"", resume:"1966年生，国家能源局原副局长、党组成员。", id:"person46",name_en:"",rank:"0",id2:"persons46"}, 
{name:"王骏", age:"5", dob:"", pob:"", school:"", region:"", system:"", resume:"国家能源局新能源和可再生能源司原司长。", id:"person47",name_en:"",rank:"0",id2:"persons47"}, 
{name:"王光荣", age:"5", dob:"", pob:"", school:"", region:"浙江", system:"浙江", resume:"杭州市人民政府原副秘书长。", id:"person48",name_en:"",rank:"0",id2:"persons48"}, 
{name:"赵洪兴", age:"5", dob:"1956", pob:"吉林", school:"", region:"吉林", system:"吉林", resume:"1956年出生，吉林省司法厅原副厅长。", id:"person49",name_en:"",rank:"0",id2:"persons49"}, 
{name:"李和平", age:"5", dob:"", pob:"", school:"", region:"广东", system:"广东", resume:"原广东省广业资产经营有限公司党委委员、副总经理。", id:"person50",name_en:"",rank:"0",id2:"persons50"}, 
{name:"陈志中", age:"5", dob:"", pob:"", school:"", region:"广东", system:"广东", resume:"原南方医科大学党委常委、副校长。", id:"person51",name_en:"",rank:"0",id2:"persons51"}, 
{name:"王帅廷", age:"5", dob:"", pob:"", school:"", region:"香港", system:"香港", resume:"原香港中旅有限公司总经理、党委副书记。", id:"person52",name_en:"",rank:"0",id2:"persons52"}, 
{name:"宋林", age:"3", dob:"1963", pob:"山东", school:"同济大学", region:"", system:"", resume:"1963年出生，华润（集团）有限公司董事长。", id:"person53",name_en:"",rank:"0",id2:"persons53"}, 
{name:"毛小兵", age:"3", dob:"1965", pob:"湖南", school:"北京科技大学", region:"青海", system:"青海", resume:"1965年出生，青海省委常委、西宁市委书记。", id:"person54",name_en:"",rank:"0",id2:"persons54"}, 
{name:"杨光成", age:"4", dob:"1955", pob:"云南", school:"昆明理工大学", region:"云南", system:"云南", resume:"1955年出生，原云南省交通运输厅党组书记、厅长。", id:"person55",name_en:"",rank:"0",id2:"persons55"}, 
{name:"赵亚平", age:"4", dob:"1952", pob:"山东", school:"", region:"河南", system:"河南", resume:"1952年出生，原河南省人大常委会常务委员、财经委副主任。", id:"person56",name_en:"",rank:"0",id2:"persons56"}, 
{name:"申维辰", age:"2", dob:"1956", pob:"山西", school:"山西大学", region:"山西", system:"山西", resume:"1956年出生，中国科协原党组书记、常务副主席。", id:"person57",name_en:"",rank:"0",id2:"persons57"}, 
{name:"郝卫平", age:"5", dob:"", pob:"", school:"", region:"中央", system:"中央", resume:"原国家能源局核电司司长。", id:"person58",name_en:"",rank:"0",id2:"persons58"}, 
{name:"郭忠实", age:"5", dob:"1955", pob:"山西", school:"山西财经大学", region:"山西", system:"山西", resume:"1955年出生，山西省直机关工委副书记。", id:"person59",name_en:"",rank:"0",id2:"persons59"}, 
{name:"杨晓波", age:"5", dob:"1971", pob:"山西", school:"南开大学", region:"山西", system:"山西", resume:"1971年出生，山西省高平市市长。", id:"person60",name_en:"",rank:"0",id2:"persons60"}, 
{name:"曾孔祥", age:"5", dob:"1963", pob:"贵州", school:"贵州省委党校", region:"贵州", system:"贵州", resume:"1963年出生，原贵州省黔西南州副州长。", id:"person61",name_en:"",rank:"0",id2:"persons61"}, 
{name:"王国群", age:"5", dob:"1954", pob:"山东", school:"清华大学", region:"山东", system:"山东", resume:"1954年出生，原山东省烟台市政府特邀咨询，曾任副市长。", id:"person62",name_en:"",rank:"0",id2:"persons62"}, 
{name:"柯志敏", age:"5", dob:"1957", pob:"福建", school:"集美财经", region:"福建", system:"福建", resume:"1957年出生，原福建省厦门市经济发展局局长、党组书记。", id:"person63",name_en:"",rank:"0",id2:"persons63"}, 
{name:"王君", age:"5", dob:"1957", pob:"", school:"中共绥化地委党校", region:"黑龙江", system:"黑龙江", resume:"1957年出生，原黑龙江省绥化市政协副主席。", id:"person64",name_en:"",rank:"0",id2:"persons64"}, 
{name:"苏利明", age:"5", dob:"1968", pob:"四川", school:"西华师范大学", region:"四川", system:"四川", resume:"1968年出生，原四川省广元市委常委、市人民政府副市长。", id:"person65",name_en:"",rank:"0",id2:"persons65"}, 
{name:"孔兆平", age:"5", dob:"1960", pob:"安徽", school:"北方交通大学", region:"上海安徽", system:"上海安徽", resume:"1960年出生，原上海铁路局副局长。", id:"person66",name_en:"",rank:"0",id2:"persons66"}, 
{name:"沈培平", age:"3", dob:"1962", pob:"云南", school:"保山师范专科学校", region:"云南", system:"云南", resume:"1962年出生，原云南省副省长。", id:"person67",name_en:"",rank:"0",id2:"persons67"}, 
{name:"金道铭", age:"3", dob:"1953", pob:"北京", school:"北京市东城区职工业余大学", region:"中央山西", system:"中央山西", resume:"1953年出生，原山西省人大常委会副主任。", id:"person68",name_en:"",rank:"0",id2:"persons68"}, 
{name:"姚木根", age:"3", dob:"1957", pob:"江西", school:"江西财经大学", region:"江西", system:"江西", resume:"1957年出生，原江西省副省长。", id:"person69",name_en:"",rank:"0",id2:"persons69"}, 
{name:"孔垂柱", age:"3", dob:"1953", pob:"云南", school:"云南省党校", region:"云南", system:"云南", resume:"1953年出生，原云南省副省长。", id:"person70",name_en:"",rank:"0",id2:"persons70"}, 
{name:"何华章", age:"4", dob:"1964", pob:"四川", school:"北京师范大学", region:"四川", system:"四川", resume:"1964年出生，原四川省遂宁市市长。", id:"person71",name_en:"",rank:"0",id2:"persons71"}, 
{name:"胡学凡", age:"4", dob:"1955", pob:"安徽", school:"五七大学", region:"安徽", system:"安徽", resume:"1955年出生，原安徽省旅游局局长。", id:"person72",name_en:"",rank:"0",id2:"persons72"}, 
{name:"吴周春", age:"4", dob:"1951", pob:"广东", school:"华南理工大学", region:"江苏广东", system:"江苏广东", resume:"1951年出生，原中国南方电网有限公司总经理助理、南网国际有限公司董事长。", id:"person73",name_en:"",rank:"0",id2:"persons73"}, 
{name:"谢克敏", age:"5", dob:"1962", pob:"山西", school:"", region:"山西", system:"山西", resume:"1962年出生，山西省监察厅原副厅长。", id:"person74",name_en:"",rank:"0",id2:"persons74"}, 
{name:"苏浩", age:"5", dob:"1959", pob:"山西", school:"中国社会科学院", region:"山西", system:"山西", resume:"1959年出生，山西省司法厅原副厅长、原太原市公安局局长", id:"person75",name_en:"",rank:"0",id2:"persons75"}, 
{name:"高世宝", age:"5", dob:"1956", pob:"山西", school:"", region:"山西", system:"山西", resume:"1956年出生，山西朔州市经济开发区管委会主任。", id:"person76",name_en:"",rank:"0",id2:"persons76"}, 
{name:"张波", age:"5", dob:"1961", pob:"山西", school:"", region:"山西", system:"山西", resume:"1961年出生，山西太原市民营经济开发区管委会主任。", id:"person77",name_en:"",rank:"0",id2:"persons77"}, 
{name:"孔祥鹏", age:"5", dob:"1953", pob:"广西", school:"中央党校", region:"广西", system:"广西", resume:"1953年出生，原广西省梧州市人大副主任。", id:"person78",name_en:"",rank:"0",id2:"persons78"}, 
{name:"孟金根", age:"5", dob:"", pob:"", school:"", region:"上海", system:"上海", resume:"原上海铁路局副总工程师兼上海动车客车段段长、党委副书记。", id:"person79",name_en:"",rank:"0",id2:"persons79"}, 
{name:"邵禹斌", age:"5", dob:"1975", pob:"", school:"", region:"甘肃", system:"甘肃", resume:"1975年出生，原甘肃省国有资产投资集团有限公司总经理助理、投资部部长，甘肃信托副董事长。", id:"person80",name_en:"",rank:"0",id2:"persons80"}, 
{name:"时小雨", age:"5", dob:"1954", pob:"江苏", school:"福建林学院", region:"福建", system:"福建", resume:"1953年生，福州市原副市长。", id:"person81",name_en:"",rank:"0",id2:"persons81"}, 
{name:"闫征", age:"5", dob:"", pob:"", school:"", region:"陕西", system:"陕西", resume:"陕西省能源局原副局长。", id:"person82",name_en:"",rank:"0",id2:"persons82"}, 
{name:"冀文林", age:"3", dob:"1966", pob:"内蒙古", school:"中国地质大学", region:"四川中央海南", system:"四川中央海南", resume:"1966年出生，原海南省副省长。", id:"person83",name_en:"",rank:"0",id2:"persons83"}, 
{name:"祝作利", age:"3", dob:"1955", pob:"河南", school:"西北大学", region:"陕西", system:"陕西", resume:"1955年出生，原山西省政协副主席。", id:"person84",name_en:"",rank:"0",id2:"persons84"}, 
{name:"沈定成", age:"4", dob:"", pob:"", school:"西南石油大学", region:"", system:"", resume:"原中国联合石油有限公司党委书记、副总经理。", id:"person85",name_en:"",rank:"0",id2:"persons85"}, 
{name:"幸敬华", age:"4", dob:"1966", pob:"湖北", school:"湖北省委党校", region:"湖北", system:"湖北", resume:"1966年出生，原湖北省荆州市委常委、委员职务。", id:"person86",name_en:"",rank:"0",id2:"persons86"}, 
{name:"刘沐珍", age:"4", dob:"1958", pob:"湖北", school:"华中农业大学咸宁分院", region:"湖北", system:"湖北", resume:"1958年出生，原湖北鄂州市政协党组书记、主席。", id:"person87",name_en:"",rank:"0",id2:"persons87"}, 
{name:"张翔", age:"4", dob:"", pob:"", school:"", region:"河南", system:"河南", resume:"原河南物资集团董事长。", id:"person88",name_en:"",rank:"0",id2:"persons88"}, 
{name:"高忠宝", age:"4", dob:"", pob:"", school:"", region:"云南", system:"云南", resume:"原中石化云南分公司总经理。", id:"person89",name_en:"",rank:"0",id2:"persons89"}, 
{name:"丁雪峰", age:"5", dob:"1963", pob:"山西", school:"山西大学", region:"山西", system:"山西", resume:"1963年出生，山西吕梁市市长。", id:"person90",name_en:"",rank:"0",id2:"persons90"}, 
{name:"任云峰", age:"5", dob:"1956", pob:"山西", school:"", region:"山西", system:"山西", resume:"1956年出生，山西省政府机关事务管理局局长。", id:"person91",name_en:"",rank:"0",id2:"persons91"}, 
{name:"安俊生", age:"5", dob:"1953", pob:"山西", school:"南开大学", region:"山西", system:"山西", resume:"1953年出生，山西省地质勘查局原局长。", id:"person92",name_en:"",rank:"0",id2:"persons92"}, 
{name:"胡彪", age:"5", dob:"", pob:"山西", school:"", region:"山西", system:"山西", resume:"山西朔州市水利局原局长。", id:"person93",name_en:"",rank:"0",id2:"persons93"}, 
{name:"张东阳", age:"5", dob:"1964", pob:"辽宁", school:"沈阳市警察学校", region:"辽宁", system:"辽宁", resume:"1964年出生，原沈阳市人民检察院检察长。", id:"person94",name_en:"",rank:"0",id2:"persons94"}, 
{name:"严小康", age:"5", dob:"1963", pob:"江西", school:"韶关师范专科学校", region:"广东", system:"广东", resume:"1963年出生，原广东东莞市副市长、市公安局局长。", id:"person95",name_en:"",rank:"0",id2:"persons95"}, 
{name:"王可炜", age:"5", dob:"1963", pob:"广东", school:"第一军医大学", region:"广东", system:"广东", resume:"1963年出生，原广东省科技厅副厅长。", id:"person96",name_en:"",rank:"0",id2:"persons96"}, 
{name:"吴连奇", age:"5", dob:"1964", pob:"四川", school:"广元师范学校", region:"四川", system:"四川", resume:"1964年出生，原速传广元市副市长。", id:"person97",name_en:"",rank:"0",id2:"persons97"}, 
{name:"罗长刚", age:"4", dob:"1954", pob:"河南", school:"", region:"湖北", system:"湖北", resume:"1954年出生，原武汉经济技术开发区管委会主任、工委书记。", id:"person98",name_en:"",rank:"0",id2:"persons98"}, 
{name:"杨跃国", age:"4", dob:"1961", pob:"云南", school:"云南省农业学校", region:"云南", system:"云南", resume:"1961年出生，原云南省德宏州政协主席。", id:"person99",name_en:"",rank:"0",id2:"persons99"}, 
{name:"刘学库", age:"4", dob:"1953", pob:"河北", school:"廊坊财贸学校", region:"河北", system:"河北", resume:"1953年出生，原河北省财政经济委员会副主任委员、省发改委主任。", id:"person100",name_en:"",rank:"0",id2:"persons100"}, 
{name:"黎平", age:"4", dob:"1956", pob:"贵州", school:"贵州省工学院", region:"贵州", system:"贵州", resume:"1956年出生，原贵州省水利厅厅长、党组书记。", id:"person101",name_en:"",rank:"0",id2:"persons101"}, 
{name:"刘亚", age:"5", dob:"1962", pob:"安徽", school:"中央党校", region:"安徽", system:"安徽", resume:"1962年出生，原蚌埠市人民政府副市长。", id:"person102",name_en:"",rank:"0",id2:"persons102"}, 
{name:"郑兴华", age:"5", dob:"1959", pob:"湖北", school:"武汉化工学院", region:"湖北", system:"湖北", resume:"1959年出生，原湖北省宜昌市政府副市长。", id:"person103",name_en:"",rank:"0",id2:"persons103"}, 
{name:"梁树林", age:"5", dob:"", pob:"河北", school:"", region:"河北", system:"河北", resume:"原河北省人大法制委员会副主任委员。", id:"person104",name_en:"",rank:"0",id2:"persons104"}, 
{name:"范绍慧", age:"5", dob:"1952", pob:"河北", school:"河北大学", region:"河北", system:"河北", resume:"1952年出生，原唐山市人大常委会主任。", id:"person105",name_en:"",rank:"0",id2:"persons105"}, 
{name:"王世坤", age:"5", dob:"", pob:"", school:"", region:"中央", system:"中央", resume:"海南省海洋与渔业监察总队", id:"person106",name_en:"",rank:"0",id2:"persons106"}, 
{name:"陈瑞喜", age:"5", dob:"1962", pob:"福建", school:"福建农学院", region:"福建", system:"福建", resume:"1962年出生，原福建省三明市副市长。", id:"person107",name_en:"",rank:"0",id2:"persons107"}, 
{name:"宋国安", age:"5", dob:"1964", pob:"安徽", school:"塔里木农垦大学", region:"新疆", system:"新疆", resume:"1964年出生，原新疆生产建设兵团第五师党委常委、副师长。", id:"person108",name_en:"",rank:"0",id2:"persons108"}, 
{name:"冯焰", age:"5", dob:"1957", pob:"河南", school:"中央党校", region:"新疆", system:"新疆", resume:"1957年出生，原新疆生产建设兵团第十三师党委常委、副师长。", id:"person109",name_en:"",rank:"0",id2:"persons109"}, 
{name:"周耀", age:"5", dob:"1958", pob:"安徽", school:"安徽农学院皖北分院", region:"安徽", system:"安徽", resume:"1958年出生，原安徽省六安经济技术开发区管理委员会主任。", id:"person110",name_en:"",rank:"0",id2:"persons110"}, 
{name:"秦国刚", age:"5", dob:"1957", pob:"陕西", school:"中央党校", region:"陕西", system:"陕西", resume:"1957年出生，原陕西省委党校副校长。", id:"person111",name_en:"",rank:"0",id2:"persons111"}, 
{name:"郭建华", age:"5", dob:"1958", pob:"河南", school:"", region:"河南", system:"河南", resume:"1958年出生，原河南省安阳市副市长。", id:"person112",name_en:"",rank:"0",id2:"persons112"}, 
{name:"邓琳", age:"5", dob:"", pob:"河南", school:"", region:"河南", system:"河南", resume:"原河南省新乡市政协副主席。", id:"person113",name_en:"",rank:"0",id2:"persons113"}, 
{name:"鲁力军", age:"5", dob:"1956", pob:"湖北", school:"中南财经大学", region:"湖北", system:"湖北", resume:"1956年出生，原湖北省国资委副主任。", id:"person114",name_en:"",rank:"0",id2:"persons114"}, 
{name:"胡传道", age:"5", dob:"1959", pob:"安徽", school:"安徽大学", region:"安徽", system:"安徽", resume:"1959年出生，原安徽广电传媒产业集团副总经理、党委委员。", id:"person115",name_en:"",rank:"0",id2:"persons115"}, 
{name:"郭大焕", age:"5", dob:"1961", pob:"", school:"", region:"中央", system:"中央", resume:"1961年出生，原任中铁隧道集团有限公司董事长、党委书记。", id:"person116",name_en:"",rank:"0",id2:"persons116"}, 
{name:"张继奎", age:"5", dob:"1959", pob:"甘肃", school:"兰州铁道学院", region:"中央", system:"中央", resume:"1959年出生，原中隧集团有限公司总经理、副董事长。", id:"person117",name_en:"",rank:"0",id2:"persons117"}, 
{name:"王应福", age:"4", dob:"1966", pob:"海南", school:"海南省委党校", region:"海南", system:"海南", resume:"1966年出生，原海南省安全生产监督管理局局长、党组书记。", id:"person118",name_en:"",rank:"0",id2:"persons118"}, 
{name:"段建国", age:"4", dob:"1956", pob:"山西", school:"山西大学", region:"山西", system:"山西", resume:"1956年生，山西省交通厅原厅长。", id:"person119",name_en:"",rank:"0",id2:"persons119"}, 
{name:"蒋洁敏", age:"2", dob:"1955", pob:"山东", school:"山东大学", region:"青海中央", system:"青海中央", resume:"1955年出生，原国务院国资委主任，中国石油天然气集团公司总经理、党组书记，中国石油天然气股份有限公司董事长。", id:"person120",name_en:"",rank:"0",id2:"persons120"}, 
{name:"张光亮", age:"5", dob:"1962", pob:"海南", school:"", region:"海南", system:"海南", resume:"1962年出生，原海南省海洋与渔业监察总队总队长。", id:"person121",name_en:"",rank:"0",id2:"persons121"}, 
{name:"王永春", age:"3", dob:"1960", pob:"吉林", school:"长春地质学院", region:"中央", system:"中央", resume:"1960年出生，曾任第十八届中央候补委员，原中国石油天然气集团公司副总经理。", id:"person122",name_en:"",rank:"0",id2:"persons122"}, 
{name:"李华林", age:"4", dob:"1962", pob:"湖北", school:"西南石油大学", region:"", system:"", resume:"1962年出生，原中国石油天然气集团公司副总经理。", id:"person123",name_en:"",rank:"0",id2:"persons123"}, 
{name:"冉新权", age:"4", dob:"1965", pob:"四川", school:"西南石油大学", region:"", system:"", resume:"1965年出生，原中国石油天然气股份有限公司副总裁。", id:"person124",name_en:"",rank:"0",id2:"persons124"}, 
{name:"王道富", age:"4", dob:"1955", pob:"四川", school:"西南石油大学", region:"", system:"", resume:"1955年出生，原中国石油天然气股份有限公司总地质师。", id:"person125",name_en:"",rank:"0",id2:"persons125"}, 
{name:"裴唐生", age:"5", dob:"", pob:"山西", school:"", region:"山西", system:"山西", resume:"原山西省财政厅监督检查局副局长。", id:"person126",name_en:"",rank:"0",id2:"persons126"}, 
{name:"陈良纲", age:"4", dob:"1962", pob:"安徽", school:"安徽大学", region:"安徽", system:"安徽", resume:"1962年出生，原安徽省国土资源厅副厅长、淮北市委副书记。", id:"person127",name_en:"",rank:"0",id2:"persons127"}, 
{name:"骆炳峰", age:"4", dob:"1957", pob:"江西", school:"中央党校", region:"江西", system:"江西", resume:"1957年出生，原赣州市人大常委会主任、党组书记。", id:"person128",name_en:"",rank:"0",id2:"persons128"}, 
{name:"谢阳当", age:"4", dob:"1965", pob:"湖南", school:"中央党校", region:"湖南", system:"湖南", resume:"1965年出生，原常宁市人民政府副市长。", id:"person129",name_en:"",rank:"0",id2:"persons129"}, 
{name:"杨林", age:"4", dob:"1954", pob:"甘肃", school:"西北师范大学", region:"甘肃", system:"甘肃", resume:"1954年出生，原酒泉市政协主席。", id:"person130",name_en:"",rank:"0",id2:"persons130"}, 
{name:"吕凯明", age:"5", dob:"1957", pob:"山东", school:"", region:"福建", system:"福建", resume:"1957年出生，原三明市政协副主席、三明市第二医院院长。", id:"person131",name_en:"",rank:"0",id2:"persons131"}, 
{name:"骆国清", age:"5", dob:"1952", pob:"福建", school:"空军雷达学院", region:"福建", system:"福建", resume:"1952年出生，原福建省泉州市人大常委会副主任。", id:"person132",name_en:"",rank:"0",id2:"persons132"}, 
{name:"孙家群", age:"5", dob:"1960", pob:"江西", school:"中央党校", region:"江西", system:"江西", resume:"1960年出生，原萍乡市副市长。", id:"person133",name_en:"",rank:"0",id2:"persons133"}, 
{name:"湛岳登", age:"5", dob:"1955", pob:"广东", school:"佛山兽医专科学校", region:"广东", system:"广东", resume:"1955年出生，原湛江市人大常委会副主任。", id:"person134",name_en:"",rank:"0",id2:"persons134"}, 
{name:"徐龙", age:"4", dob:"1957", pob:"浙江", school:"浙江大学", region:"浙江香港广东", system:"浙江香港广东", resume:"1957年出生，原广东移动董事长、总经理。", id:"person135",name_en:"",rank:"0",id2:"persons135"}, 
{name:"李达球", age:"3", dob:"1953", pob:"广西", school:"中央党校", region:"广西", system:"广西", resume:"1953年出生，原广西政协副主席。", id:"person136",name_en:"",rank:"0",id2:"persons136"}, 
{name:"李兴华", age:"4", dob:"1958", pob:"广东", school:"西安交通大学", region:"广东", system:"广东", resume:"1958年出生，原广东省科学技术厅厅长。", id:"person137",name_en:"",rank:"0",id2:"persons137"}, 
{name:"祝义方", age:"5", dob:"1955", pob:"河南", school:"", region:"河南", system:"河南", resume:"1955年出生，原平顶山市政协党组副书记、新城区党工委书记。", id:"person138",name_en:"",rank:"0",id2:"persons138"}, 
{name:"江捍平", age:"5", dob:"1957", pob:"广东", school:"南华大学", region:"广东", system:"广东", resume:"1957年出生，深圳市卫生局党组书记、局长，中共深圳市委卫生工委书记，深圳市卫生和人口计划生育委员会党组书记、主任。", id:"person139",name_en:"",rank:"0",id2:"persons139"}, 
{name:"王术君", age:"5", dob:"1970", pob:"山东", school:"哈尔滨船舶工程学院", region:"中央贵州", system:"中央贵州", resume:"1970年出生，原贵州省安顺市市长。", id:"person140",name_en:"",rank:"0",id2:"persons140"}, 
{name:"申会", age:"5", dob:"1953", pob:"山西", school:"", region:"山西", system:"山西", resume:"1953年出生，原晋城市政协党组副书记、 副主席 。", id:"person141",name_en:"",rank:"0",id2:"persons141"}, 
{name:"武志忠", age:"5", dob:"1951", pob:"内蒙古", school:"", region:"内蒙古", system:"内蒙古", resume:"1951年出生，原内蒙古自治区政府副秘书长。", id:"person142",name_en:"",rank:"0",id2:"persons142"}, 
{name:"孙炼", age:"5", dob:"", pob:"", school:"", region:"广东", system:"广东", resume:"原广东移动计划规划部总经理。", id:"person143",name_en:"",rank:"0",id2:"persons143"}, 
{name:"雷毅", age:"5", dob:"1962", pob:"云南", school:"", region:"云南", system:"云南", resume:"1962年出生，原云南锡业集团有限责任公司党委书记、董事长。", id:"person144",name_en:"",rank:"0",id2:"persons144"}, 
{name:"武予鲁", age:"5", dob:"1955", pob:"山西", school:"焦作矿业学院", region:"河南", system:"河南", resume:"1955年出生，原义马煤业集团股份有限公司董事长、党委书记。", id:"person145",name_en:"",rank:"0",id2:"persons145"}, 
{name:"倪发科", age:"3", dob:"1954", pob:"江苏", school:"中央党校", region:"安徽", system:"安徽", resume:"1954年出生，原安徽省副省长。", id:"person146",name_en:"",rank:"0",id2:"persons146"}, 
{name:"王素毅", age:"3", dob:"1961", pob:"内蒙古", school:"山西矿业学院", region:"内蒙古", system:"内蒙古", resume:"1961年出生，原内蒙古统战部长。", id:"person147",name_en:"",rank:"0",id2:"persons147"}, 
{name:"郭永祥", age:"3", dob:"1949", pob:"山东", school:"中央党校", region:"山东四川", system:"山东四川", resume:"1949年出生，原四川省委常委、秘书长、办公厅主任。", id:"person148",name_en:"",rank:"0",id2:"persons148"}, 
{name:"许润龙", age:"5", dob:"1965", pob:"江西", school:"同济大学", region:"江西", system:"江西", resume:"1965年出生，原江西省交通运输厅党委委员、副厅长。", id:"person149",name_en:"",rank:"0",id2:"persons149"}, 
{name:"和新民", age:"5", dob:"", pob:"云南", school:"怒江医疗中专", region:"云南", system:"云南", resume:"原云南省怒江僳僳族州人民政府副州长。", id:"person150",name_en:"",rank:"0",id2:"persons150"}, 
{name:"雷政富", age:"4", dob:"1958", pob:"重庆", school:"中央党校", region:"四川重庆", system:"四川重庆", resume:"1958年出生，原重庆市北碚区区委书记。", id:"person151",name_en:"",rank:"0",id2:"persons151"}, 
{name:"洪金洲", age:"4", dob:"1963", pob:"贵州", school:"贵州省供销学校", region:"贵州", system:"贵州", resume:"1963年出生，原贵州省黔东南州副州长、党组成，凯里市委副书记、市长。", id:"person152",name_en:"",rank:"0",id2:"persons152"}, 
{name:"郭振玺", age:"5", dob:"1965", pob:"山东", school:"山东大学", region:"", system:"", resume:"1965年出生，曾分别主管央视广告部门和财经频道（央视二套）长达八年多时间。", id:"person153",name_en:"",rank:"0",id2:"persons153"}, 
{name:"陈华一", age:"5", dob:"1954", pob:"广东", school:"中山大学", region:"广东", system:"广东", resume:"1954年出生，原广东省人大常委会副秘书长。", id:"person154",name_en:"",rank:"0",id2:"persons154"}, 
{name:"唐建华", age:"5", dob:"", pob:"重庆", school:"", region:"重庆", system:"重庆", resume:"原重庆市公安局经济技术开发区分局局长、重庆市公安局副局长。", id:"person155",name_en:"",rank:"0",id2:"persons155"}, 
{name:"王承魁", age:"5", dob:"1953", pob:"广东", school:"", region:"广东", system:"广东", resume:"1953年出生，原广东省司法厅党委副书记、巡视员。", id:"person156",name_en:"",rank:"0",id2:"persons156"}, 
{name:"冯朝辉", age:"5", dob:"1967", pob:"山西", school:"", region:"山西", system:"山西", resume:"1967年出生，原山西高速公路管理局纪委书记。", id:"person157",name_en:"",rank:"0",id2:"persons157"}, 
{name:"李珠江", age:"4", dob:"1954", pob:"广东", school:"", region:"广东", system:"广东", resume:"1954年出生，原广东省人大常委会副秘书长，海洋与渔业局局长。", id:"person158",name_en:"",rank:"0",id2:"persons158"}, 
{name:"张笑东", age:"4", dob:"1963", pob:"河南", school:"商丘农专", region:"河南", system:"河南", resume:"1963年出生，原安阳市委书记。", id:"person159",name_en:"",rank:"0",id2:"persons159"}, 
{name:"汪扬", age:"5", dob:"1956", pob:"江苏", school:"江苏省委党校", region:"江苏", system:"江苏", resume:"1956年出生，原南京市政府副秘书长。", id:"person160",name_en:"",rank:"0",id2:"persons160"}, 
{name:"王国长", age:"5", dob:"", pob:"福建", school:"", region:"福建", system:"福建", resume:"原福建省环保厅副厅长。", id:"person161",name_en:"",rank:"0",id2:"persons161"}, 
{name:"张光华", age:"5", dob:"", pob:"", school:"", region:"云南", system:"云南", resume:"原云南地质矿产勘查局副局长。", id:"person162",name_en:"",rank:"0",id2:"persons162"}, 
{name:"钱磊", age:"5", dob:"1962", pob:"云南", school:"云南大学", region:"云南", system:"云南", resume:"1962年出生，原云南警官学院党委委员、副院长。", id:"person163",name_en:"",rank:"0",id2:"persons163"}, 
{name:"权明富", age:"5", dob:"1964", pob:"湖南", school:"", region:"湖南", system:"湖南", resume:"1964年出生，原天津移动董事长、总经理。", id:"person164",name_en:"",rank:"0",id2:"persons164"}, 
{name:"李欣泽", age:"5", dob:"", pob:"广东", school:"", region:"广东", system:"广东", resume:"原广州移动总经理。", id:"person165",name_en:"",rank:"0",id2:"persons165"}, 
{name:"谭建明", age:"5", dob:"1960", pob:"四川", school:"", region:"四川", system:"四川", resume:"1960年出生，原成都市兴蓉投资股份有限公司董事长。", id:"person166",name_en:"",rank:"0",id2:"persons166"}, 
{name:"王文全", age:"5", dob:"", pob:"", school:"", region:"四川", system:"四川", resume:"原成都市兴蓉集团有限公司董事、总经理。", id:"person167",name_en:"",rank:"0",id2:"persons167"}, 
{name:"单增德", age:"4", dob:"1961", pob:"山东", school:"山东省委党校", region:"山东", system:"山东", resume:"1961年出生，原山东省农业厅副厅长。", id:"person168",name_en:"",rank:"0",id2:"persons168"}, 
{name:"周顺明", age:"4", dob:"1951", pob:"湖北", school:"", region:"湖北", system:"湖北", resume:"1951年出生，原湖北省财政厅党组副书记、副厅长。", id:"person169",name_en:"",rank:"0",id2:"persons169"}, 
{name:"夏早发", age:"5", dob:"1965", pob:"湖北", school:"", region:"湖北", system:"湖北", resume:"1965年出生，原湖北省国土资源厅党组成员、副厅长。", id:"person170",name_en:"",rank:"0",id2:"persons170"}, 
{name:"尚伟", age:"5", dob:"1970", pob:"河南", school:"武汉水利电力大学", region:"广东", system:"广东", resume:"1970年出生，原广东省韶关市人民政府副市长。", id:"person171",name_en:"",rank:"0",id2:"persons171"}, 
{name:"李洁之", age:"5", dob:"", pob:"", school:"", region:"安徽", system:"安徽", resume:"原安徽皖通高速公路股份有限公司董事。", id:"person172",name_en:"",rank:"0",id2:"persons172"}, 
{name:"鲁向东", age:"5", dob:"1960", pob:"福建", school:"北京大学", region:"中央", system:"中央", resume:"1960年出生，原中国移动通信集团公司副总经理。", id:"person173",name_en:"",rank:"0",id2:"persons173"}, 
{name:"张保", age:"4", dob:"1957", pob:"山西", school:"中央党校", region:"山西", system:"山西", resume:"1957年出生，原山西省长治市市委副市级、市长。", id:"person174",name_en:"",rank:"0",id2:"persons174"}, 
{name:"杨汉忠", age:"4", dob:"1954", pob:"山西", school:"内蒙古财贸学校", region:"内蒙古", system:"内蒙古", resume:"1954年出生，原内蒙古自治区政法委副书记。", id:"person175",name_en:"",rank:"0",id2:"persons175"}, 
{name:"王建辉", age:"5", dob:"1957", pob:"湖北", school:"华中师范大学", region:"湖北", system:"湖北", resume:"1957年出生，原湖北省文化厅副厅长。", id:"person176",name_en:"",rank:"0",id2:"persons176"}, 
{name:"张善彩", age:"5", dob:"1957", pob:"湖北", school:"华中师范大学", region:"湖北", system:"湖北", resume:"1957年出生，原湖北省知识产权局党组副书记、副局长。", id:"person177",name_en:"",rank:"0",id2:"persons177"}, 
{name:"李亚力", age:"5", dob:"1960", pob:"山西", school:"", region:"山西", system:"山西", resume:"1960年出生，原山西省公安厅副厅长、太原市公安局局长。", id:"person178",name_en:"",rank:"0",id2:"persons178"}, 
{name:"刘家坤", age:"5", dob:"1961", pob:"安徽", school:"中央党校", region:"安徽", system:"安徽", resume:"1961年出生，原安徽阜阳市人大副主任。", id:"person179",name_en:"",rank:"0",id2:"persons179"}, 
{name:"衣俊卿", age:"3", dob:"1958", pob:"黑龙江", school:"北京大学", region:"黑龙江中央", system:"黑龙江中央", resume:"1958年出生，原中央编译局局长。", id:"person180",name_en:"",rank:"0",id2:"persons180"}, 
{name:"韩树明", age:"4", dob:"1965", pob:"辽宁", school:"安徽淮北煤炭师范学院", region:"中央重庆", system:"中央重庆", resume:"1965年出生，原重庆市长寿区委副书记、区长。", id:"person181",name_en:"",rank:"0",id2:"persons181"}, 
{name:"彭智勇", age:"4", dob:"1963", pob:"重庆", school:"西南师范学院（现并入西南大学）", region:"重庆", system:"重庆", resume:"1963年出生，原重庆市九龙坡区委书记职务。", id:"person182",name_en:"",rank:"0",id2:"persons182"}, 
{name:"罗登友", age:"4", dob:"1957", pob:"重庆", school:"", region:"重庆", system:"重庆", resume:"1957年出生，原重庆市交通纪委书记、监察专员。", id:"person183",name_en:"",rank:"0",id2:"persons183"}, 
{name:"吕英明", age:"5", dob:"1962", pob:"广东", school:"天津大学", region:"广东", system:"广东", resume:"1962年出生，原广东省国土厅副厅长、水利厅副厅长。", id:"person184",name_en:"",rank:"0",id2:"persons184"}, 
{name:"陈弘平", age:"4", dob:"1954", pob:"广东", school:"广东省委党校", region:"广东", system:"广东", resume:"1954年出生，原揭阳市市委书记。", id:"person185",name_en:"",rank:"0",id2:"persons185"}, 
{name:"张引", age:"5", dob:"1959", pob:"江苏", school:"", region:"江苏", system:"江苏", resume:"1959年出生，原江苏省徐州市政协副主席、泉山区区委书记。", id:"person186",name_en:"",rank:"0",id2:"persons186"}, 
{name:"郭勇飞", age:"5", dob:"1954", pob:"山西", school:"山西师范大学", region:"山西", system:"山西", resume:"1954年出生，原山西省晋中市副市长。", id:"person187",name_en:"",rank:"0",id2:"persons187"}, 
{name:"黄小虎", age:"5", dob:"1963", pob:"安徽", school:"安徽财贸学院", region:"安徽", system:"安徽", resume:"1963年出生，原安徽军工集团董事长。", id:"person188",name_en:"",rank:"0",id2:"persons188"}, 
{name:"谢华骏", age:"5", dob:"1957", pob:"重庆", school:"", region:"重庆", system:"重庆", resume:"1957年出生，原重庆机电控股（集团）公司董事长、党委书记。", id:"person189",name_en:"",rank:"0",id2:"persons189"}, 
{name:"周天云", age:"5", dob:"1952", pob:"重庆", school:"", region:"重庆", system:"重庆", resume:"1952年出生，原重庆市地产集团董事、董事长。", id:"person190",name_en:"",rank:"0",id2:"persons190"}, 
{name:"何玉柏", age:"5", dob:"", pob:"四川", school:"四川大学", region:"重庆", system:"重庆", resume:"原重庆国际信托有限公司董事长、党委书记。", id:"person191",name_en:"",rank:"0",id2:"persons191"}, 
{name:"罗广", age:"5", dob:"", pob:"四川", school:"西南农业大学（现西南大学）", region:"重庆", system:"重庆", resume:"原西南证券董事长。", id:"person192",name_en:"",rank:"0",id2:"persons192"}, 
{name:"粟志光", age:"5", dob:"1955", pob:"重庆", school:"重庆市行政管理学院", region:"重庆", system:"重庆", resume:"1955年出生，原重庆城投集团副总经理。", id:"person193",name_en:"",rank:"0",id2:"persons193"}, 
{name:"赵建明", age:"5", dob:"", pob:"安徽", school:"", region:"安徽", system:"安徽", resume:"原马钢集团公司党委副书记。", id:"person194",name_en:"",rank:"0",id2:"persons194"}, 
{name:"张友仁", age:"5", dob:"", pob:"", school:"", region:"安徽", system:"安徽", resume:"原安徽军工集团控股有限公司董事长。", id:"person195",name_en:"",rank:"0",id2:"persons195"}, 
{name:"戴春宁", age:"3", dob:"1962", pob:"", school:"", region:"公司宁夏", system:"公司宁夏", resume:"1962年出生，原中国出口信用保险公司副总经理。", id:"person196",name_en:"",rank:"0",id2:"persons196"}, 
{name:"杨刚", age:"3", dob:"1953", pob:"河北", school:"中央党校", region:"新疆中央", system:"新疆中央", resume:"1953年出生，原政协全国经济委员会副主任。", id:"person197",name_en:"",rank:"0",id2:"persons197"}, 
{name:"陈安众", age:"3", dob:"1954", pob:"湖南", school:"湖南师范大学", region:"湖南江西", system:"湖南江西", resume:"1954年出生，原江西省人大常委会副主任、省总工会主席。", id:"person198",name_en:"",rank:"0",id2:"persons198"}, 
{name:"童名谦", age:"3", dob:"1958", pob:"湖南", school:"中国青年政治学院", region:"湖南", system:"湖南", resume:"1958年出生，原湖南省政协副主席。", id:"person199",name_en:"",rank:"0",id2:"persons199"}, 
{name:"温青山", age:"4", dob:"1958", pob:"", school:"中国人民大学", region:"", system:"", resume:"1958年出生，原中石油总会计师。", id:"person200",name_en:"",rank:"0",id2:"persons200"}, 
{name:"曹鉴燎", age:"4", dob:"1955", pob:"广东", school:"暨南大学", region:"广州", system:"广州", resume:"1955年出生，原广州市副市长、增城市委书记。", id:"person201",name_en:"",rank:"0",id2:"persons201"}, 
{name:"李永恒", age:"4", dob:"1952", pob:"广东", school:"广州市财政中专", region:"广东", system:"广东", resume:"1952年出生，原广东省国税局局长李永恒。", id:"person202",name_en:"",rank:"0",id2:"persons202"}, 
{name:"徐孟加", age:"4", dob:"1957", pob:"四川", school:"青海大学", region:"四川", system:"四川", resume:"1957年出生，原雅安市委书记。", id:"person203",name_en:"",rank:"0",id2:"persons203"}, 
{name:"胡国初", age:"4", dob:"1953", pob:"湖南", school:"", region:"湖南", system:"湖南", resume:"1953年出生，原湖南省衡阳市人大常委会主任。", id:"person204",name_en:"",rank:"0",id2:"persons204"}, 
{name:"李崇禧 ", age:"2", dob:"1951", pob:"四川", school:"四川财经学院", region:"四川", system:"四川", resume:"1951年出生，原四川省政协主席。", id:"person205",name_en:"",rank:"0",id2:"persons205"}, 
{name:"李东生", age:"2", dob:"1955", pob:"山东", school:"复旦大学", region:"中央", system:"中央", resume:"1955年出生，原公安部党委副书记、副部长。", id:"person206",name_en:"",rank:"0",id2:"persons206"}, 
{name:"董乃军", age:"5", dob:"1974", pob:"四川", school:"西南师范大学", region:"重庆", system:"重庆", resume:"1974年出生，原重庆市永川区委常委、副区长。", id:"person207",name_en:"",rank:"0",id2:"persons207"}, 
{name:"程晓强", age:"5", dob:"1955", pob:"江苏", school:"", region:"江苏", system:"江苏", resume:"1955年出生，原南通农业职业技术学院党委书记。", id:"person208",name_en:"",rank:"0",id2:"persons208"}, 
{name:"孙建成", age:"5", dob:"1957", pob:"四川", school:"解放军西安政治学校", region:"四川", system:"四川", resume:"1957年出生，原成都市质量技术监督局局长。", id:"person209",name_en:"",rank:"0",id2:"persons209"}, 
{name:"蒲忠", age:"5", dob:"1969", pob:"四川", school:"四川师范大学", region:"四川", system:"四川", resume:"1969年出生，原四川雅安市委常委、常务副市长。", id:"person210",name_en:"",rank:"0",id2:"persons210"}, 
{name:"安小予", age:"5", dob:"1953", pob:"河北", school:"", region:"新疆四川", system:"新疆四川", resume:"1953年出生，原四川大学党委常委、副校长。", id:"person211",name_en:"",rank:"0",id2:"persons211"}, 
{name:"肖双胜", age:"5", dob:"1969", pob:"天津", school:"河北大学", region:"河北", system:"河北", resume:"1969年出生，原河北省纪委对廊坊市委常委、政法委书记。", id:"person212",name_en:"",rank:"0",id2:"persons212"}, 
{name:"黄峰平", age:"5", dob:"1965", pob:"浙江", school:"上海医科大学", region:"上海", system:"上海", resume:"1965年出生，原上海市卫生和计划生育委员会副主任。", id:"person213",name_en:"",rank:"0",id2:"persons213"}, 
{name:"杨丰陌", age:"5", dob:"1957", pob:"", school:"", region:"辽宁", system:"辽宁", resume:"1957年出生，辽宁省民族事务委员会副主任、党组副书记。", id:"person214",name_en:"",rank:"0",id2:"persons214"}, 
{name:"梁景理", age:"5", dob:"1954", pob:"广西", school:"武汉钢铁学院(武汉科技大学）", region:"广西", system:"广西", resume:"1954年出生，原广西柳州钢铁（集团）公司董事长、党委书记。", id:"person215",name_en:"",rank:"0",id2:"persons215"}, 
{name:"孟中泽", age:"5", dob:"1963", pob:"河南", school:"武汉钢铁学院(武汉科技大学)", region:"河南", system:"河南", resume:"1963年出生，原郑州煤炭工业（集团）有限责任公司党委书记、董事长。", id:"person216",name_en:"",rank:"0",id2:"persons216"}, 
{name:"郭有明", age:"3", dob:"1956", pob:"湖北", school:"武汉水利电力学院", region:"湖北", system:"湖北", resume:"1956年出生，原湖北省副省长。", id:"person217",name_en:"",rank:"0",id2:"persons217"}, 
{name:"陈柏槐", age:"3", dob:"1950", pob:"湖北", school:"华中师范大学", region:"湖北", system:"湖北", resume:"1950年出生，原湖北省政协副主席。", id:"person218",name_en:"",rank:"0",id2:"persons218"}, 
{name:"许杰", age:"4", dob:"1955", pob:"", school:"中国人民大学", region:"中央", system:"中央", resume:"1955年出生，原国家信访局党组成员、副局长。", id:"person219",name_en:"",rank:"0",id2:"persons219"}, 
{name:"蒋国星", age:"5", dob:"1955", pob:"江苏", school:"", region:"江苏", system:"江苏", resume:"1955年出生，原江苏省新闻出版局副局长、党组成员。", id:"person220",name_en:"",rank:"0",id2:"persons220"}, 
{name:"邓炳球", age:"5", dob:"1957", pob:"广东", school:"惠州教育学院", region:"广东", system:"广东", resume:"1957年出生，原惠州市政协副主席、党组成员、秘书长、办公室主任。", id:"person221",name_en:"",rank:"0",id2:"persons221"}, 
{name:"李正伦", age:"5", dob:"", pob:"山西", school:"", region:"山西", system:"山西", resume:"原山西人大副秘书长。", id:"person222",name_en:"",rank:"0",id2:"persons222"}, 
{name:"康晓东", age:"5", dob:"1953", pob:"云南", school:"", region:"云南", system:"云南", resume:"1953年出生，原康晓东省司法厅副厅长。", id:"person223",name_en:"",rank:"0",id2:"persons223"}, 
{name:"蔡荣生", age:"5", dob:"1965", pob:"吉林", school:"中国人民大学", region:"北京", system:"北京", resume:"1965年出生，中国人民大学招生就业处原处长。", id:"person224",name_en:"",rank:"0",id2:"persons224"}, 
{name:"李东光 ", age:"4", dob:"1960", pob:"", school:"鞍山钢铁学院", region:"中央", system:"中央", resume:"1960年出生，中国铝业股份有限公司（601600.SH）原副总裁、中铝国际贸易有限公司总经理。", id:"person225",name_en:"",rank:"0",id2:"persons225"}, 
{name:"徐敏杰", age:"4", dob:"1959", pob:"", school:"青岛远洋船员学院", region:"上海中央", system:"上海中央", resume:"1959年出生，中国远洋运输（集团）总公司副总裁、中集集团原副董事长。", id:"person226",name_en:"",rank:"0",id2:"persons226"}, 
{name:"茅士家", age:"5", dob:"1950", pob:"", school:"上海海运学院", region:"中央", system:"中央", resume:"1950年出生，中海油运前总经理。", id:"person227",name_en:"",rank:"0",id2:"persons227"}, 
{name:"余思友", age:"5", dob:"", pob:"", school:"", region:"广州i", system:"广州i", resume:"原中国南方航空营销委常务副主任。", id:"person228",name_en:"",rank:"0",id2:"persons228"}, 
{name:"秦国辉", age:"5", dob:"", pob:"", school:"", region:"广州", system:"广州", resume:"原中国南方航空营销委常务副主任。", id:"person229",name_en:"",rank:"0",id2:"persons229"}, 
{name:"季建业", age:"3", dob:"1957", pob:"江苏", school:"苏州大学", region:"江苏", system:"江苏", resume:"1957年出生，原南京市委副书记、市长。", id:"person230",name_en:"",rank:"0",id2:"persons230"}, 
{name:"廖少华", age:"3", dob:"1960", pob:"四川", school:"西南交通大学", region:"中央贵州", system:"中央贵州", resume:"1960年出生，原贵州省常委，遵义市委书记。", id:"person231",name_en:"",rank:"0",id2:"persons231"}, 
{name:"齐平景", age:"4", dob:"1954", pob:"河北", school:"北京外国语大学", region:"中央", system:"中央", resume:"1954年出生，原中国外文局副局长。", id:"person232",name_en:"",rank:"0",id2:"persons232"}, 
{name:"郭超", age:"5", dob:"", pob:"安徽", school:"", region:"安徽", system:"安徽", resume:"原安徽省合肥市人大常委会副主任。", id:"person233",name_en:"",rank:"0",id2:"persons233"}, 
{name:"王世益", age:"5", dob:"1962", pob:"湖北", school:"武汉市委党校", region:"湖北", system:"湖北", resume:"1962年出生，原武汉市新洲区委书记。", id:"person234",name_en:"",rank:"0",id2:"persons234"}, 
{name:"廖小波", age:"5", dob:"1958", pob:"广西", school:"西南交通大学", region:"广西", system:"广西", resume:"1958年出生，原广西自治区发展和改革委员会副主任。", id:"person235",name_en:"",rank:"0",id2:"persons235"}, 
{name:"刘仲虎", age:"5", dob:"1962", pob:"宁夏", school:"宁夏农学院", region:"宁夏", system:"宁夏", resume:"1962年出生，原中卫市副市长。", id:"person236",name_en:"",rank:"0",id2:"persons236"}, 
{name:"汪建设", age:"5", dob:"1956", pob:"安徽", school:"安徽大学", region:"安徽", system:"安徽", resume:"1956年出生，原黄山市政法委书记。", id:"person237",name_en:"",rank:"0",id2:"persons237"}, 
{name:"刘铁男", age:"3", dob:"1954", pob:"北京", school:"北京科技大学", region:"中央", system:"中央", resume:"1954年出生，原国家发改委副主任，原国家能源局局长。", id:"person238",name_en:"",rank:"0",id2:"persons238"}, 
{name:"李春城", age:"3", dob:"1956", pob:"辽宁", school:"哈尔滨工业大学", region:"黑龙江四川", system:"黑龙江四川", resume:"1956年出生，原四川省委副书记，省委常委。", id:"person239",name_en:"",rank:"0",id2:"persons239"}, 
{name:"梁道行", age:"4", dob:"1949", pob:"广东", school:"中山大学", region:"广东", system:"广东", resume:"1949年出生，原深圳市人民政府副市长。", id:"person240",name_en:"",rank:"0",id2:"persons240"}];






var WIDTH=320;
var GLOBAL_URL = "";
var INFO_INTRODUCE_TITLE="落马官员信息简介";
var INFO_INTRODUCE_TITLE_NAME = "姓名：";
var INFO_INTRODUCE_TITLE_AGE = "官员职级：";
var INFO_INTRODUCE_TITLE_DOB = "出生年代：";
var INFO_INTRODUCE_TITLE_POB = "祖籍或出生地：";
var INFO_INTRODUCE_TITLE_SCHOOL = "毕业院校：";
var INFO_INTRODUCE_TITLE_REGION = "任职地区：";
var INFO_INTRODUCE_TITLE_SYSTEM = "任职系统：";
var INFO_INTRODUCE_TITLE_RESUME = "简历：";
var object = null;
var INFO_BACKGROUND_COLOR = "#2d475b";
var INFO_PROBLEM_OFFICER_TITLE_COLOR = "#f69338";
var dragging = false;
var offsetX = 0;
var offsetY = 0;
var s=-1;//选择框图片计数
var global_relate_legend_id="";//relate图例id初始化
var legendArray={age:1,dob:1,pob:1,school:1,region:1,system:1};//判断加载


var names = ["cairongsheng", "chenanzhong", "chenbaihuai", "chentiexin", "jiangshan", "dushanxue", "guoyouming", "hanxiancong", "jindaoming", "liaoshaohua", "lingzhengce", "zhuzuoli", "luoou", "quanjunliang", "shenpeiping", "surong", "tanli", "tanxiwei", "tongmingqian", "wangjunguo", "wangsuyi", "wangwenke", "wanqingliang", "wuchangshun", "xugefei", "yangbaohua", "yaomugen", "zhangtianxin"];

$(document).ready(function(){
	document.getElementById("font2").addEventListener("mousedown",chooseageMousedown,false);
	function fontMousedown(){
		$("#menu").show();
		$("#cover").hide();
	}

    //prepare
    $("body").css({"font-family":"'Arial'", "width":"320px", "height":"100%", "background-color":"#666", "-moz-user-select":"none", "-webkit-user-select":"none", "-ms-user-select":"none", "-khtml-user-select":"none", "user-select":"none"});
 
    //show menu
    $("#menu").css({"width":WIDTH});
    $("#menu").hide();
    var menu_rect = $("<div id='menu_rect'></div>").css({"position":"fixed", "margin-top":"57px", "width":WIDTH, "height":"100%", "background-color":INFO_BACKGROUND_COLOR, "opacity":".95", "-moz-opacity":".95", "filter":"alpha(opacity=95)"});
    $("#menu").append(menu_rect);
    var menu_content = $("<div id='menu_content'></div>").css({"position":"absolute", "width":WIDTH, "margin-top":"57px"});
    $("#menu").append(menu_content);
    var menu_title = $("<div id='menu_title'></div>").css({"position":"fixed", "width":WIDTH, "height":"100px", "background-color":INFO_BACKGROUND_COLOR, "border-top-style":"solid", "border-top-width":"6.5px", "border-top-color":INFO_PROBLEM_OFFICER_TITLE_COLOR, "border-bottom-style":"solid", "border-bottom-width":"1px", "border-bottom-color":"#999"});
    $("#menu").append(menu_title);
    var menu_title_img = $("<img src='img/people.png'></img>").css({"position":"absolute", "margin-left":"16px", "margin-top":"17px","width":"50px","height":"50px", "color":"#FFF",});
    $("#menu_title").append(menu_title_img);
    var menu_title_closeButton = $("<img id='menu_title_closeButton'></img>").css({"position":"absolute", "width":"50px", "height":"50px" ,"cursor":"pointer", "margin-left":"230px", "margin-top":"20px","cursor":"pointer"});
    menu_title_closeButton.attr("src",GLOBAL_URL+"img/legend.png");
    $("#menu_title").append(menu_title_closeButton);
    var menu_content_choose = $("<div id='menu_content_choose'></div>").css({"margin-top":"50px"});
    $("#menu_content").append(menu_content_choose);
    var menu_content_choose_age=$("<div id='1' class='menu_content_choose_age_d'></div>");
    $("#menu_content_choose").append(menu_content_choose_age);
    var menu_content_choose_dob=$("<div id='2' class='menu_content_choose_age_d'></div>");
    $("#menu_content_choose").append(menu_content_choose_dob);
    var menu_content_choose_pob=$("<div id='3' class='menu_content_choose_age_d'></div>");
    $("#menu_content_choose").append(menu_content_choose_pob);
    var menu_content_choose_school=$("<div id='4' class='menu_content_choose_age_d'></div>");
    $("#menu_content_choose").append(menu_content_choose_school);
     var menu_content_choose_school=$("<div id='5' class='menu_content_choose_age_d'></div>");
    $("#menu_content_choose").append(menu_content_choose_school);
     var menu_content_choose_school=$("<div id='6' class='menu_content_choose_age_d'></div>");
    $("#menu_content_choose").append(menu_content_choose_school);


    var menu_content_choose_age_text1=$("<p class='menu_content_choose_age_text_d'></p>");
    $("#1").append(menu_content_choose_age_text1);
    menu_content_choose_age_text1.text("官员级别");
    var menu_content_choose_age_text2=$("<p class='menu_content_choose_age_text_d'></p>");
    $("#2").append(menu_content_choose_age_text2);
    menu_content_choose_age_text2.text("出生年代");
    var menu_content_choose_age_text3=$("<p class='menu_content_choose_age_text_d'></p>");
    $("#3").append(menu_content_choose_age_text3);
    menu_content_choose_age_text3.text("祖籍或出生地");
    var menu_content_choose_age_text4=$("<p class='menu_content_choose_age_text_d'></p>");
    $("#4").append(menu_content_choose_age_text4);
    menu_content_choose_age_text4.text("毕业院校");
    var menu_content_choose_age_text5=$("<p class='menu_content_choose_age_text_d'></p>");
    $("#5").append(menu_content_choose_age_text5);
    menu_content_choose_age_text5.text("任职地区");
    var menu_content_choose_age_text6=$("<p class='menu_content_choose_age_text_d'></p>");
    $("#6").append(menu_content_choose_age_text6);
    menu_content_choose_age_text6.text("任职系统");

    var menu_content_choose_age_img11=$("<img class='menu_content_choose_age_img_d'></img>");
    menu_content_choose_age_img11.attr("src", GLOBAL_URL + "img/age.png");
    //console.log("1");
    $("#1").append(menu_content_choose_age_img11);
    var menu_content_choose_age_img21=$("<img class='menu_content_choose_age_img_d'></img>");
    menu_content_choose_age_img21.attr("src", GLOBAL_URL + "img/dob.png");
    //console.log("2");
    $("#2").append(menu_content_choose_age_img21);
    var menu_content_choose_age_img31=$("<img class='menu_content_choose_age_img_d'></img>");
    menu_content_choose_age_img31.attr("src", GLOBAL_URL + "img/pob.png");
    //console.log("3");
    $("#3").append(menu_content_choose_age_img31);
    var menu_content_choose_age_img41=$("<img class='menu_content_choose_age_img_d'></img>");
    menu_content_choose_age_img41.attr("src", GLOBAL_URL + "img/school.png");
    //console.log("4");
    $("#4").append(menu_content_choose_age_img41);
    var menu_content_choose_age_img51=$("<img class='menu_content_choose_age_img_d'></img>");
    menu_content_choose_age_img51.attr("src", GLOBAL_URL + "img/region.png");
    //console.log("5");
    $("#5").append(menu_content_choose_age_img51);
    var menu_content_choose_age_img61=$("<img class='menu_content_choose_age_img_d'></img>");
    menu_content_choose_age_img61.attr("src", GLOBAL_URL + "img/system.png");
    //console.log("6");
    $("#6").append(menu_content_choose_age_img61);



    var menu_content_choose_age_img1=$("<img class='menu_content_choose_age_img2_d'></img>");
    menu_content_choose_age_img1.attr("src", GLOBAL_URL + "img/circle1.png");
    //console.log("1");
    $("#1").append(menu_content_choose_age_img1);
    var menu_content_choose_age_img2=$("<img class='menu_content_choose_age_img2_d'></img>");
    menu_content_choose_age_img2.attr("src", GLOBAL_URL + "img/circle2.png");
    //console.log("2");
    $("#2").append(menu_content_choose_age_img2);
    var menu_content_choose_age_img3=$("<img class='menu_content_choose_age_img2_d'></img>");
    menu_content_choose_age_img3.attr("src", GLOBAL_URL + "img/circle3.png");
    //console.log("3");
    $("#3").append(menu_content_choose_age_img3);
    var menu_content_choose_age_img4=$("<img class='menu_content_choose_age_img2_d'></img>");
    menu_content_choose_age_img4.attr("src", GLOBAL_URL + "img/circle4.png");
    //console.log("4");
    $("#4").append(menu_content_choose_age_img4);
    var menu_content_choose_age_img5=$("<img class='menu_content_choose_age_img2_d'></img>");
    menu_content_choose_age_img5.attr("src", GLOBAL_URL + "img/circle5.png");
    //console.log("5");
    $("#5").append(menu_content_choose_age_img5);
    var menu_content_choose_age_img6=$("<img class='menu_content_choose_age_img2_d'></img>");
    menu_content_choose_age_img6.attr("src", GLOBAL_URL + "img/circle6.png");
    //console.log("6");
    $("#6").append(menu_content_choose_age_img6);


    $(".menu_content_choose_age_d").css({"position":"relative","width":WIDTH,"height":"70px","border-bottom-style":"solid", "border-bottom-width":"1px", "border-bottom-color":"#999","z-index":"0","cursor":"pointer"});
    $(".menu_content_choose_age_text_d").css({"padding-top":"20px","height":"40px","margin-left":"80px","line-height":"30px","font-size":"20px","color":"#FFF"});
    $(".menu_content_choose_age_img_d").css({"margin-left":"20px","width":"20px","height":"20px","margin-top":"-35px"});
    $(".menu_content_choose_age_img2_d").css({"margin-left":"205px","width":"20px","height":"20px","margin-top":"-35px"});


    

    function menuMouseout(e){
    	//console.log(e.currentTarget.id);
    	scrollTop=$(window).scrollTop();
        e.preventDefault();
        e.stopPropagation();
        var idName="#"+e.currentTarget.id.toString();
        $(idName).css({"width":WIDTH,"height":"70px","background-color":INFO_BACKGROUND_COLOR,"border-bottom-style":"solid", "border-bottom-width":"1px", "border-bottom-color":"#999"});

    };

    function menuMouseover(e){
    	//console.log(e.currentTarget.id);
    	scrollTop=$(window).scrollTop();
        e.preventDefault();
        e.stopPropagation();
        var idName="#"+e.currentTarget.id.toString();
        $(idName).css({"width":WIDTH,"height":"70px","background-color":"#7A1B16","border-bottom-style":"solid", "border-bottom-width":"1px", "border-bottom-color":"#999"});
    };

    for(var i=1;i<7;i++){
        //console.log(i);
    	var n=i.toString();
    	//console.log(n);
    	document.getElementById(n).addEventListener("mouseover",menuMouseover,false);
        document.getElementById(n).addEventListener("mouseout",menuMouseout,false);
    };
    

    //end menu


    //show choose 
    document.getElementById("1").addEventListener("mousedown",chooseageMousedown,false);
    document.getElementById("2").addEventListener("mousedown",choosedobMousedown,false);
    document.getElementById("3").addEventListener("mousedown",choosepobMousedown,false);
    // document.getElementById("4").addEventListener("mousedown",chooseschoolMousedown,false);
    // document.getElementById("5").addEventListener("mousedown",chooseregionMousedown,false);
    // document.getElementById("6").addEventListener("mousedown",choosesystemMousedown,false);

    $("#choose").css({"width":WIDTH});
    $("#choose").hide();
    var choose_rect = $("<div id='choose_rect'></div>").css({"position":"fixed", "margin-top":"57px", "width":WIDTH, "height":"100%", "background-color":INFO_BACKGROUND_COLOR, "opacity":".95", "-moz-opacity":".95", "filter":"alpha(opacity=95)"});
    $("#choose").append(choose_rect);
    var choose_content = $("<div id='choose_content'></div>").css({"position":"absolute", "width":WIDTH, "margin-top":"57px"});
    $("#choose").append(choose_content);
    var choose_title = $("<div id='choose_title'></div>").css({"position":"fixed", "width":WIDTH, "height":"100px", "background-color":INFO_BACKGROUND_COLOR, "border-top-style":"solid", "border-top-width":"6.5px", "border-top-color":INFO_PROBLEM_OFFICER_TITLE_COLOR, "border-bottom-style":"solid", "border-bottom-width":"1px", "border-bottom-color":"#999"});
    $("#choose").append(choose_title);
    var choose_title_img = $("<img src='img/people.png'></img>").css({"position":"absolute", "margin-left":"16px", "margin-top":"17px","width":"50px","height":"50px", "color":"#FFF",});
    $("#choose_title").append(choose_title_img);
    var choose_title_closeButton = $("<img id='choose_title_closeButton'></img>").css({"position":"absolute", "width":"50px", "height":"50px",  "cursor":"pointer", "margin-left":"230px", "margin-top":"20px"});
    choose_title_closeButton.attr("src",GLOBAL_URL+"img/legend.png");
    $("#choose_title").append(choose_title_closeButton);
    // var choose_foot = $("<div id='choosefoot'></div>").css({"width":"100%", "height":"1000px", "border-top-style":"solid", "border-top-width":"3px", "border-top-color":"#999"});
    // $("#choose").append(choose_foot);
    

    function chooseageMousedown(e){
    	//console.log(e.currentTarget.id);
    	$("#cover").hide();
    	$("#choose").show();
        scrollTop=$(window).scrollTop();
        e.preventDefault();
        var LoadData_age=findAgeData();
        //console.log(LoadData);
        updateAge(LoadData_age);
     //    for(i=0;i<28;i++){
    	// document.getElementById("persons"+i).addEventListener("mousedown",infoMousedown,false);
    	// console.log();
    	// }
    };

    function choosedobMousedown(e){
    	//console.log(e.currentTarget.id);
    	scrollTop=$(window).scrollTop();
    	e.preventDefault();
    	var LoadData_dob=findDobData();
    	updateDob(LoadData_dob);
    };

    function choosepobMousedown(e){
    	//console.log(e.currentTarget.id);
    	scrollTop=$(window).scrollTop();
    	e.preventDefault();
    	var LoadData_pob=findPobData();
    	updatePob(LoadData_pob);

    }




    function updateAge(OfficerData){
        $("#choose_content").empty();

        var person_title=$("<div id='person_title'></div>").css({"position":"absolute","width":"80px","height":"90px","top":"60px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title);
        person_title.text("正国级");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rank == 5){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age5"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };
        s=adjustS(s);
        //console.log(s);
        ytop=parseInt(s/4+1)*90+30;
        var person_title2=$("<div id='person_title2'></div>").css({"position":"absolute","width":"80px","height":"90px","top":ytop+"px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title2);
        person_title2.text("副国级");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rank == 4){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age4"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };
        s=adjustS(s);
        ytop=parseInt(s/4+1)*90+30;
        var person_title3=$("<div id='person_title3'></div>").css({"position":"absolute","width":"80px","height":"90px","top":ytop+"px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title3);
        person_title3.text("正处级");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rank == 3){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age4"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };
        
        ytop=parseInt(s/4+1)*90+110;
        var choose_foot = $("<div id='choose_content_foot'></div>").css({"position":"absolute","width":"100%", "top":ytop+"px", "border-top-style":"solid", "border-top-width":"3px", "border-top-color":"#999"});
        $("#choose_content").append(choose_foot);

        s=-1;

        scrollTop = $(window).scrollTop();
        $("#main").hide();
        $("#menu").hide();
        $("#info").hide();
        $("#choose").show();
        $("#relate").hide();
        document.body.scrollTop = 0;
        $("#choose_title_closeButton").click(function(){
        $("#choose").hide();
    	$("#info").hide();
    	$("#main").hide();
    	$("#menu").show();
    	$("#relate").hide();
    	});
    };

    function updateDob(OfficerData){
         $("#choose_content").empty();

        var person_title=$("<div id='person_title_dob'></div>").css({"position":"absolute","width":"80px","height":"90px","top":"60px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title);
        person_title.text("40后");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rankdob == 5){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age5"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };
        s=adjustS(s);
        console.log(s);
        ytop=parseInt(s/4+1)*90+30;
        var person_title2=$("<div id='person_title2_dob'></div>").css({"position":"absolute","width":"80px","height":"90px","top":ytop+"px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title2);
        person_title2.text("50后");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rankdob == 4){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age4"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };
        s=adjustS(s);
        ytop=parseInt(s/4+1)*90+30;
        var person_title3=$("<div id='person_title3_dob'></div>").css({"position":"absolute","width":"80px","height":"90px","top":ytop+"px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title3);
        person_title3.text("60后");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rankdob == 3){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age4"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };
        
        ytop=parseInt(s/4+1)*90+110;
        var choose_foot = $("<div id='choose_content_foot'></div>").css({"width":"100%", "height":ytop+"px", "border-top-style":"solid", "border-top-width":"3px", "border-top-color":"#999"});
        $("#choose_content").append(choose_foot);

        s=-1;
        scrollTop = $(window).scrollTop();
        $("#main").hide();
        $("#menu").hide();
        $("#info").hide();
        $("#choose").show();
        $("#relate").hide();
        document.body.scrollTop = 0;
        $("#choose_title_closeButton").click(function(){
        $("#choose").hide();
    	$("#info").hide();
    	$("#main").hide();
    	$("#menu").show();
    	$("#relate").hide();
    	});
    };

    function updatePob(OfficerData){
         $("#choose_content").empty();

        var person_title1=$("<div id='person_titl1e_dob'></div>").css({"position":"absolute","width":"80px","height":"90px","top":"60px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title1);
        person_title1.text("华北");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rankpob == 5){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age5"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };
        s=adjustS(s);
        //console.log(s);
        ytop=parseInt(s/4+1)*90+30;
        var person_title2=$("<div id='person_title2_dob'></div>").css({"position":"absolute","width":"80px","height":"90px","top":ytop+"px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title2);
        person_title2.text("华中");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rankpob == 4){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age4"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };
        s=adjustS(s);
        ytop=parseInt(s/4+1)*90+30;
        var person_title3=$("<div id='person_title3_dob'></div>").css({"position":"absolute","width":"80px","height":"90px","top":ytop+"px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title3);
        person_title3.text("东北");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rankpob == 3){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age4"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };
        s=adjustS(s);
        //console.log(s);
        ytop=parseInt(s/4+1)*90+30;
        var person_title4=$("<div id='person_title4_dob'></div>").css({"position":"absolute","width":"80px","height":"90px","top":ytop+"px","left":"10px","font-size":"25px","color":"white"});
        choose_content.append(person_title4);
        person_title4.text("华南");
        for(var i=0; i<28; i++){
        if(OfficerData[i].rankpob == 2){
        var names=OfficerData[i].name_en;
        s=s+1;
        //console.log("age4"+s);
        var targetid=i.toString();
        displayChooseImg(names,targetid);
        }
        };

        ytop=parseInt(s/4+1)*90+110;
        var choose_foot = $("<div id='choose_content_foot'></div>").css({"width":"100%", "height":ytop+"px", "border-top-style":"solid", "border-top-width":"0.5px", "border-top-color":"#999"});
        $("#choose_content").append(choose_foot);

        s=-1;
        scrollTop = $(window).scrollTop();
        $("#main").hide();
        $("#menu").hide();
        $("#info").hide();
        $("#choose").show();
        $("#relate").hide();
        document.body.scrollTop = 0;
        $("#choose_title_closeButton").click(function(){
        $("#choose").hide();
    	$("#info").hide();
    	$("#main").hide();
    	$("#menu").show();
    	$("#relate").hide();
    	});
    };

    
    function adjustS(s){
    	if(s%4 != 0){
        	if(s%4 == 1){
        		return s=s+6;
        	}
        	else if(s%4 == 2){
        		return s=s+5;
        	}
        	else if(s%4 == 3){
        		return s+4;
        	}
        	//console.log(s);

        }
        else{
        	return s=s+7;
        }
    }
    function displayChooseImg(name,i){
    	var imgId="persons"+i;
    	//console.log("choose:"+imgId);
    	var x = s%4*80; 
        var y = parseInt(s/4+1)*(80+10);
        var person = $("<div></div>").css({"position":"absolute", "width":"80px", "height":"80px","cursor":"pointer"});
        choose_content.append(person);
        person.attr("id",imgId);
        person.css("left", x);
        person.css("top", y);
        var person_circle = $("<img></img>").css({"position":"absolute", "width":"56px", "height":"56px", "border":"0", "margin-left":"12px", "margin-top":"12px",});
        person_circle.attr("src", GLOBAL_URL + "img/circle.png");
        person.append(person_circle);
        var person_image = $("<img ></img>").css({"position":"absolute", "width":"50px", "height":"50px", "border":"0", "margin-left":"15px", "margin-top":"15px",});
        person_image.attr("src", GLOBAL_URL + "img/" + name + ".png");
        person.append(person_image);
        var person_name = $("<p id='person'></p>").css({"position":"absolute", "width":"80px", "margin-left":"0px", "margin-top":"70px", "font-size":"12px", "color":"#fff", "text-align":"center"});
        person_name.text(name);
        person.append(person_name);
        var person_top = $("<div></div>").css({"position":"absolute", "width":"80px", "height":"80px"});
        person.append(person_top);
        document.getElementById(imgId).addEventListener("mousedown",relateMousedown,false);
    }

    function displayRelateImg(name,circle){
    	var imgId="persons"+i;
    	//console.log("relate:"+imgId);
    	var x = s%4*80; 
        var y = parseInt(s/4+1)*(80+10);
        var person = $("<div></div>").css({"position":"absolute", "width":"80px", "height":"80px"});
        relate_content.append(person);
        person.attr("id",imgId);
        person.css("left", x);
        person.css("top", y);
        var person_circle = $("<img></img>").css({"position":"absolute", "width":"56px", "height":"56px", "border":"0", "margin-left":"12px", "margin-top":"12px",});
        person_circle.attr("src", GLOBAL_URL + "img/"+circle+".png");
        person.append(person_circle);
        var person_image = $("<img ></img>").css({"position":"absolute", "width":"50px", "height":"50px", "border":"0", "margin-left":"15px", "margin-top":"15px",});
        person_image.attr("src", GLOBAL_URL + "img/" + name + ".png");
        person.append(person_image);
        var person_name = $("<p id='person'></p>").css({"position":"absolute", "width":"80px", "margin-left":"0px", "margin-top":"70px", "font-size":"12px", "color":"#fff", "text-align":"center"});
        person_name.text(name);
        person.append(person_name);
        var person_top = $("<div></div>").css({"position":"absolute", "width":"80px", "height":"80px"});
        person.append(person_top);
        
    }

    function displayRelateTitleImg(OfficerData){
    	var id=OfficerData.id;
        var name=OfficerData.name_en;
        $("#relate_title_photo").empty();
        var relate_title_circle = $("<img></img>").css({"position":"absolute", "width":"56px", "height":"56px", "border":"0", "margin-left":"13px", "margin-top":"13px"});//bug1
        relate_title_circle.attr("src", GLOBAL_URL + "img/circle.png");
        $("#relate_title_photo").append(relate_title_circle);
        var relate_title_img = $("<img ></img>").css({"position":"absolute", "width":"50px", "height":"50px", "border":"0", "margin-left":"15.5px", "margin-top":"15.5px","cursor":"pointer"});
        relate_title_img.attr("src", GLOBAL_URL + "img/" + name + ".png");
        relate_title_img.attr("id",id);
        $("#relate_title_photo").append(relate_title_img);  
        var  relate_title_text=$("<p></p>").css({"position":"relative","font-size":"14px","color":"white","margin-top":"72px","text-align":"center"});
        relate_title_text.text(name);
        $("#relate_title_photo").append(relate_title_text);
        //console.log(id);
        document.getElementById(id).addEventListener("mousedown",infoMousedown,false);
    };



    function findAgeData(){
    	   //console.log("find age data");
           for(var i=0;i<OfficerData.length;i++){
            if( OfficerData[i].age == "5" ){
                OfficerData[i].rank=5;
                //console.log(OfficerData[i]);
            }
            else if(OfficerData[i].age == "4"){
            	OfficerData[i].rank=4;
            }
            else if(OfficerData[i].age == "3"){
            	OfficerData[i].rank=3;
            }
            else {
            	OfficerData[i].rank=0;
            }
           } ;
           return OfficerData;
        };

    function findDobData(){
    	  for(var i=0;i<OfficerData.length;i++){
    	  	var numdob=parseInt(OfficerData[i].dob);
             if(numdob>=1950&&numdob<1960){
             	OfficerData[i].rankdob=4;
             }
             else if(numdob>=1960&&numdob<1970){
             	OfficerData[i].rankdob=3;
             }
             else if(numdob>=1940&&numdob<1950){
             	OfficerData[i].rankdob=5;
             }
             else {
             	OfficerData[i].rankdob=0;
             }
    	  };
    	  return OfficerData;
    }

    function findPobData(){
    	   for(var i=0;i<OfficerData.length;i++){
    	   if(OfficerData[i].pob == "山东" || OfficerData[i].pob == "河北" || OfficerData[i].pob == "江苏"){
    	   	 OfficerData[i].rankpob = 5;
    	   }
    	   else if(OfficerData[i].pob == "山西" || OfficerData[i].pob == "安徽" || OfficerData[i].pob == "湖南" || OfficerData[i].pob == "湖北" || OfficerData[i].pob == "河南"){
    	   	 OfficerData[i].rankpob = 4;
    	   }
    	   else if(OfficerData[i].pob == "辽宁" || OfficerData[i].pob == "吉林" || OfficerData[i].pob == "黑龙江" ){
    	   	 OfficerData[i].rankpob = 3;
    	   }
    	   else if(OfficerData[i].pob == "云南" || OfficerData[i].pob == "广东" || OfficerData[i].pob == "重庆" || OfficerData[i].pob == "福建"){
    	   	 OfficerData[i].rankpob = 2;
    	   }
    	   else{
    	   	 OfficerData[i].rankpob = 0;
    	   }
    	   };
    	return OfficerData;
    }
    
    


    //end choose

    //show relate
     
    $("#relate").css({"width":WIDTH});
    $("#relate").hide();
    var relate_rect = $("<div id='relate_rect'></div>").css({"position":"fixed", "margin-top":"57px", "width":WIDTH, "height":"100%", "background-color":INFO_BACKGROUND_COLOR, "opacity":".95", "-moz-opacity":".95", "filter":"alpha(opacity=95)"});
    $("#relate").append(relate_rect);


    var relate_legend = $("<div id='relate_legend'></div>").css({"position":"absolute","top":"80px","margin-top":"20px","width":WIDTH,"-webkit-transform":"scale(0.9)","left":"-10px"});
    $("#relate").append(relate_legend);
    var relate_legend_box1=$("<div id='relate_legend_box1'></div>").css({"position":"absolute","top":"20px","margin":"10px","height":"20px","width":"80px","left":"18px","cursor":"pointer"});
    $("#relate_legend").append(relate_legend_box1);
    var relate_legend_img1 = $("<img id='relate_legend_img1'></img>").css({"position":"absolute","height":"15px","width":"15px"});
    relate_legend_img1.attr("src",GLOBAL_URL+"img/circle1.png"); 
    $("#relate_legend_box1").append(relate_legend_img1);
    var relate_legend_text1=$("<p>官员职级</p>").css({"position":"absolute","font-size":"10px","color":"white","left":"20px","top":"3px"});
    $("#relate_legend_box1").append(relate_legend_text1);

    var relate_legend_box2=$("<div id='relate_legend_box2'></div>").css({"position":"absolute","top":"20px","margin":"10px","height":"20px","width":"80px","left":"98px","cursor":"pointer"});
    $("#relate_legend").append(relate_legend_box2);
    var relate_legend_img2 = $("<img id='relate_legend_img2'></img>").css({"position":"absolute","height":"15px","width":"15px"});
    relate_legend_img2.attr("src",GLOBAL_URL+"img/circle2.png"); 
    $("#relate_legend_box2").append(relate_legend_img2);
    var relate_legend_text2=$("<p>出生年月</p>").css({"position":"absolute","font-size":"10px","color":"white","left":"20px","top":"3px"});
    $("#relate_legend_box2").append(relate_legend_text2);

    var relate_legend_box3=$("<div id='relate_legend_box3'></div>").css({"position":"absolute","top":"20px","margin":"10px","height":"20px","width":"80px","left":"178px","cursor":"pointer"});
    $("#relate_legend").append(relate_legend_box3);
    var relate_legend_img3 = $("<img id='relate_legend_img3'></img>").css({"position":"absolute","height":"15px","width":"15px"});
    relate_legend_img3.attr("src",GLOBAL_URL+"img/circle3.png"); 
    $("#relate_legend_box3").append(relate_legend_img3);
    var relate_legend_text3=$("<p>出生地区</p>").css({"position":"absolute","font-size":"10px","color":"white","left":"20px","top":"3px"});
    $("#relate_legend_box3").append(relate_legend_text3);

    var relate_legend_box4=$("<div id='relate_legend_box4'></div>").css({"position":"absolute","top":"20px","margin":"10px","height":"20px","width":"80px","left":"258px","cursor":"pointer"});
    $("#relate_legend").append(relate_legend_box4);
    var relate_legend_img4 = $("<img id='relate_legend_img4'></img>").css({"position":"absolute","height":"15px","width":"15px"});
    relate_legend_img4.attr("src",GLOBAL_URL+"img/circle4.png");
    $("#relate_legend_box4").append(relate_legend_img4);
    var relate_legend_text4=$("<p>毕业院校</p>").css({"position":"absolute","font-size":"10px","color":"white","left":"20px","top":"3px"});
    $("#relate_legend_box4").append(relate_legend_text4);

    var relate_legend_box5=$("<div id='relate_legend_box5'></div>").css({"position":"absolute","top":"50px","margin":"10px","height":"20px","width":"80px","left":"18px","cursor":"pointer"});
    $("#relate_legend").append(relate_legend_box5);
    var relate_legend_img5 = $("<img id='relate_legend_img5'></img>").css({"position":"absolute","height":"15px","width":"15px"});
    relate_legend_img5.attr("src",GLOBAL_URL+"img/circle5.png");
    $("#relate_legend_box5").append(relate_legend_img5);
    var relate_legend_text5=$("<p>任职地区</p>").css({"position":"absolute","font-size":"10px","color":"white","left":"20px","top":"3px"});
    $("#relate_legend_box5").append(relate_legend_text5);

    var relate_legend_box6=$("<div id='relate_legend_box6'></div>").css({"position":"absolute","top":"50px","margin":"10px","height":"20px","width":"80px","left":"98px","cursor":"pointer"});
    $("#relate_legend").append(relate_legend_box6);
    var relate_legend_img6 = $("<img id='relate_legend_img6'></img>").css({"position":"absolute","height":"15px","width":"15px"});
    relate_legend_img6.attr("src",GLOBAL_URL+"img/circle6.png"); 
    $("#relate_legend_box6").append(relate_legend_img6);
    var relate_legend_text6=$("<p>任职系统</p>").css({"position":"absolute","font-size":"10px","color":"white","left":"20px","top":"3px"});
    $("#relate_legend_box6").append(relate_legend_text6);

    var relate_content = $("<div id='relate_content'></div>").css({"position":"absolute","top":"80px", "width":WIDTH, "margin-top":"20px"});
    $("#relate").append(relate_content);
    var relate_title = $("<div id='relate_title'></div>").css({"position":"fixed", "width":WIDTH, "height":"100px", "background-color":INFO_BACKGROUND_COLOR, "border-top-style":"solid", "border-top-width":"6.5px", "border-top-color":INFO_PROBLEM_OFFICER_TITLE_COLOR, "border-bottom-style":"solid", "border-bottom-width":"1px", "border-bottom-color":"#999"});
    $("#relate").append(relate_title);
    var relate_title_photo=$("<div id='relate_title_photo'></div>").css({"position":"absolute", "width":"80px", "height":"85px","margin-top":"5px","margin-left":"2px"});
    $("#relate_title").append(relate_title_photo);
    var relate_title_closeButton = $("<button id='relate_title_closeButton' type='button'>x</button>").css({"position":"absolute", "width":"50px", "height":"50px", "background-color":INFO_BACKGROUND_COLOR, "cursor":"pointer", "margin-left":"230px", "margin-top":"20px", "color":"#FFF", "font-family":"'Arial'", "font-size":"24px"});

    $("#relate_title").append(relate_title_closeButton);

    document.getElementById("relate_legend_box1").addEventListener("mousedown",relateMousedown_legend_1,false);
    document.getElementById("relate_legend_box2").addEventListener("mousedown",relateMousedown_legend_2,false);
    document.getElementById("relate_legend_box3").addEventListener("mousedown",relateMousedown_legend_3,false);
    document.getElementById("relate_legend_box4").addEventListener("mousedown",relateMousedown_legend_4,false);
    document.getElementById("relate_legend_box5").addEventListener("mousedown",relateMousedown_legend_5,false);
    document.getElementById("relate_legend_box6").addEventListener("mousedown",relateMousedown_legend_6,false);



    function relateMousedown(e){
    	e.stopPropagation();
    	e.preventDefault();
    	console.log("relate:"+e.currentTarget.id);
    	global_relate_legend_id=e.currentTarget.id;//全局变量赋值
        var TargetData=findRelateData(e.currentTarget.id);
        displayRelateTitleImg(TargetData);
    	var NewData=updateRelateData(TargetData,legendArray);
        updateRelate(NewData);
    };
    
    

    var legend_1=true;
    function relateMousedown_legend_1(e){
    	var id_legend = global_relate_legend_id;
    	if(legend_1){
    	   legendArray.age=0;
           legend_1=!legend_1;
           $("#relate_legend_img1").attr("src",GLOBAL_URL+"img/circle5.png");
        }else{
        	legendArray.age=1;
        	legend_1=!legend_1;
           $("#relate_legend_img1").attr("src",GLOBAL_URL+"img/circle1.png");
        }
    	var legend_Array_number=legendArray;
        e.stopPropagation();
    	e.preventDefault();
    	var TargetData=findRelateData(id_legend);
        var NewData=updateRelateData(TargetData,legend_Array_number);
        updateRelate(NewData);

    }
    var legend_2=true;
    function relateMousedown_legend_2(e){
        var id_legend = global_relate_legend_id;
    	if(legend_2){
    	   legendArray.dob=0;
           legend_2=!legend_2;
        }else{
        	legendArray.dob=1;
        	legend_2=!legend_2;

        }
    	//console.log(legendArray);
    	var legend_Array_number=legendArray;
        e.stopPropagation();
    	e.preventDefault();
    	var TargetData=findRelateData(id_legend);
    	var NewData=updateRelateData(TargetData,legend_Array_number);
        updateRelate(NewData);
    }
    var legend_3=true;
    function relateMousedown_legend_3(e){
        var id_legend = global_relate_legend_id;
    	if(legend_3){
    	   legendArray.pob=0;
           legend_3=!legend_3;
        }else{
        	legendArray.pob=1;
        	legend_3=!legend_3;

        }
    	//console.log(legendArray);
    	var legend_Array_number=legendArray;
        e.stopPropagation();
    	e.preventDefault();
    	var TargetData=findRelateData(id_legend);
    	var NewData=updateRelateData(TargetData,legend_Array_number);
        updateRelate(NewData);
    };
    var legend_4=true;
    function relateMousedown_legend_4(e){
        var id_legend = global_relate_legend_id;
    	if(legend_4){
    	   legendArray.school=0;
           legend_4=!legend_4;
        }else{
        	legendArray.school=1;
        	legend_4=!legend_4;

        }
    	//console.log(legendArray);
    	var legend_Array_number=legendArray;
        e.stopPropagation();
    	e.preventDefault();
    	var TargetData=findRelateData(id_legend);
    	var NewData=updateRelateData(TargetData,legend_Array_number);
        updateRelate(NewData);
    };
    var legend_5=true;
    function relateMousedown_legend_5(e){
        var id_legend = global_relate_legend_id;
    	if(legend_5){
    	   legendArray.region=0;
           legend_5=!legend_5;
        }else{
        	legendArray.region=1;
        	legend_5=!legend_5;

        }
    	//console.log(legendArray);
    	var legend_Array_number=legendArray;
        e.stopPropagation();
    	e.preventDefault();
    	var TargetData=findRelateData(id_legend);
    	var NewData=updateRelateData(TargetData,legend_Array_number);
        updateRelate(NewData);
    };
    var legend_6=true;
    function relateMousedown_legend_6(e){
        var id_legend = global_relate_legend_id;
    	if(legend_6){
    	   legendArray.system=0;
           legend_6=!legend_6;
        }else{
        	legendArray.system=1;
        	legend_6=!legend_6;

        }
    	//console.log(legendArray);
    	var legend_Array_number=legendArray;
        e.stopPropagation();
    	e.preventDefault();
    	var TargetData=findRelateData(id_legend);
    	var NewData=updateRelateData(TargetData,legend_Array_number);
        updateRelate(NewData);
    };


   

    function findRelateData(id){
    	 for(var i=0;i<OfficerData.length;i++){
            if(OfficerData[i].id2 == id){
                return OfficerData[i];
                //console.log(OfficerData[i]);
            };
           } 
           return null;
    };
    
    function updateRelateData(data,legendArray){

    	//deal with the data
    	for(var i=0;i<OfficerData.length;i++){
    		if(legendArray.age == 0){
                OfficerData[i].relate1=0;
    		}else{
    			if(OfficerData[i].age == data.age){
          		OfficerData[i].relate1=1;
          	}
          	else{
          		OfficerData[i].relate1=0;
          	};
          };
          	if(legendArray.dob == 0){
          		OfficerData[i].relate2=0;
          	}else{
            if(OfficerData[i].dob == data.dob){
          		OfficerData[i].relate2=1;
          	}
          	else{
          		OfficerData[i].relate2=0;
          	};
          	};
          	if(legendArray.pob == 0){
          		OfficerData[i].relate3=0;
          	}else{
          		if(OfficerData[i].pob == data.pob){
          		OfficerData[i].relate3=1;
          	}
          	else{
          		OfficerData[i].relate3=0;

          	};
          	};
          	if(legendArray.school == 0){
          		OfficerData[i].relate4=0;
          	}else{
          		if(OfficerData[i].school == data.school){
          		OfficerData[i].relate4=1;
          	}
          	else{
          		OfficerData[i].relate4=0;
          	};
          	};
            if(legendArray.region == 0){
            	OfficerData[i].relate5=0;
            }else{
            	if(OfficerData[i].region == data.region){
          		OfficerData[i].relate5=1;
          	}
          	else{
          		OfficerData[i].relate5=0;
          	};
            };
          	if(legendArray.system == 0){
          		OfficerData[i].relate6=0;
          	}else{
          		if(OfficerData[i].system == data.system){
          		OfficerData[i].relate6=1;
          	}
          	else{
          		OfficerData[i].relate6=0;
          	};
          	};
          	

            var x=OfficerData[i].relate1+OfficerData[i].relate2
          	      +OfficerData[i].relate3+OfficerData[i].relate4
          	      +OfficerData[i].relate5+OfficerData[i].relate6;
          	var y=OfficerData[i].relate6.toString()+OfficerData[i].relate5.toString()
          	      +OfficerData[i].relate4.toString()+OfficerData[i].relate3.toString()
          	      +OfficerData[i].relate2.toString()+OfficerData[i].relate1.toString();
          	OfficerData[i].relateorigin1=x;
          	OfficerData[i].relateorigin2=y;
          
          };
       
    	  data.relateorigin1=0;
    	  data.relateorigin2="000000";
    	  
          return OfficerData;

    };

    
    
    // show the image
    function adjustS2(s){
    	if(s%4 != 0){
        	if(s%4 == 1){
        		return s=s+2;
        	}
        	else if(s%4 == 2){
        		return s=s+1;
        	}
        	else if(s%4 == 3){
        		return s;
        	}
        	else if(s%4 == -1){
        		return s;
        	}
        	//console.log(s);

        }
        else{
        	return s=s+3;
        }
    }

    function updateRelate(OfficerData){
    	//console.log(OfficerData);
        $("#relate_content").empty();

        //load the photo

        for(var i=0; i<28; i++){
        if(OfficerData[i].relateorigin1 == 6){
        var names=OfficerData[i].name_en;
        var circle=OfficerData[i].relateorigin2;
        //console.log("relate6: "+names);

        s=s+1;
        displayRelateImg(names,circle);
        }
        };
        s=adjustS2(s);
        //console.log(s);
        
        for(var i=0; i<28; i++){
        if(OfficerData[i].relateorigin1 == 5){

        var names=OfficerData[i].name_en;
        var circle=OfficerData[i].relateorigin2;

        s=s+1;
        //console.log("relate5: "+names);

        displayRelateImg(names,circle);
        }
        };
        s=adjustS2(s);
      
        for(var i=0; i<28; i++){
        if(OfficerData[i].relateorigin1 == 4){
        var names=OfficerData[i].name_en;
        var circle=OfficerData[i].relateorigin2;

        s=s+1;
        //console.log("relate4: "+names);

        displayRelateImg(names,circle);
        }
        };
        s=adjustS2(s);
        //console.log(s);
       
        for(var i=0; i<28; i++){
        if(OfficerData[i].relateorigin1 == 3){
        var names=OfficerData[i].name_en;
        //console.log("relate3: "+names);
        var circle=OfficerData[i].relateorigin2;

        s=s+1;
        //console.log("age4"+s);
        displayRelateImg(names,circle);
        }
        };
        s=adjustS2(s);

        for(var i=0; i<28; i++){
        if(OfficerData[i].relateorigin1 == 2){
        var names=OfficerData[i].name_en;
        //console.log("relate2: "+names);
        var circle=OfficerData[i].relateorigin2;

        s=s+1;
        //console.log("age4"+s);
        displayRelateImg(names,circle);
        }
        };
        s=adjustS2(s);

        for(var i=0; i<28; i++){
        if(OfficerData[i].relateorigin1 == 1){
        var names=OfficerData[i].name_en;
        //console.log("relate1: "+names);
        var circle=OfficerData[i].relateorigin2;

        s=s+1;
        //console.log("age4"+s);
        displayRelateImg(names,circle);
        }
        };
        
        //load the foot;

        ytop=parseInt(s/4+1)*90+110;
        var relate_foot = $("<div id='relate_content_foot'></div>").css({"position":"absolute","width":"100%", "top":ytop+"px", "border-top-style":"solid", "height":"0.5px","border-top-width":"0.1px", "border-top-color":"#999"});
        $("#relate_content").append(relate_foot);

        //load the photo end


       

        
       

        s=-1;
        scrollTop = $(window).scrollTop();
        $("#main").hide();
        $("#menu").hide();
        $("#info").hide();
        $("#choose").hide();
        $("#relate").show();
        document.body.scrollTop = 0;
        $("#relate_title_closeButton").click(function(){
        $("#choose").show();
    	$("#info").hide();
    	$("#main").hide();
    	$("#menu").hide();
    	$("#relate").hide();
    	});
    }


    //end relate


    
    
   
    
    function infoMousedown(e)
    {
        dragging = false;
        offsetX = e.clientX - this.offsetLeft;
        offsetY = e.clientY - this.offsetTop;
        //object = document.getElementById(e.currentTarget.id);
        console.log("info:"+e.currentTarget.id);
        //persons.append(object);
        scrollTop=$(window).scrollTop();
        e.preventDefault();
        e.stopPropagation();
        var OfficerData=findOfficerData(e.currentTarget.id);
        updateInfo(OfficerData.name,OfficerData.age,OfficerData.dob,OfficerData.pob,OfficerData.school,OfficerData.region,OfficerData.system,OfficerData.resume);
    }

    function infoMousemove(e)
    {
        if (dragging) {
            var x = e.clientX - offsetX;
            var y = e.clientY - offsetY;
            object.style.left = x+"px";
            object.style.top = y+"px";
        }
    }
    /*function mouseup(e)
    {
        console.log("mouseup");
        console.log(object.style.left, object.style.top);
        dragging = false;
        object = null;
    }


    for(var i=0;i<OfficerData.length-1;i++){
        var index=i;
    }*/

    //end mouse event

    //show the info
    $("#info").css({"width":WIDTH});
    $("#info").hide();
    var info_rect = $("<div id='info_rect'></div>").css({"position":"fixed", "margin-top":"57px", "width":WIDTH, "height":"100%", "background-color":INFO_BACKGROUND_COLOR, "opacity":".95", "-moz-opacity":".95", "filter":"alpha(opacity=95)"});
    $("#info").append(info_rect);
     var info_problem_officer = $("<div id='info_problem_officer'></div>").css({"position":"absolute", "width":WIDTH, "margin-top":"57px"});
    $("#info").append(info_problem_officer);
    var info_title = $("<div id='info_title'></div>").css({"position":"fixed", "width":WIDTH, "height":"50px", "background-color":INFO_BACKGROUND_COLOR, "border-top-style":"solid", "border-top-width":"6.5px", "border-top-color":INFO_PROBLEM_OFFICER_TITLE_COLOR, "border-bottom-style":"solid", "border-bottom-width":"1px", "border-bottom-color":"#999"});
    $("#info").append(info_title);
    var info_title_name = $("<p id='info_title_name'></p>").css({"position":"absolute", "margin-left":"16px", "margin-top":"7px", "color":"#FFF", "font-size":"24px",});
    $("#info_title").append(info_title_name);
    var info_title_closeButton = $("<button id='info_title_closeButton' type='button'>x</button>").css({"position":"absolute", "width":"30px", "height":"40px", "background-color":INFO_BACKGROUND_COLOR, "cursor":"pointer", "margin-left":"265px", "margin-top":"0px", "color":"#FFF", "font-family":"'Arial'", "font-size":"24px"});
    $("#info_title").append(info_title_closeButton);

    function updateInfo(name,age,dob,pob,school,region,system,resume){
        $("#info_problem_officer").empty();
        var info_introduce = $("<div id='info_introduce'></div>").css({"margin-left":"16px", "margin-right":"16px", "margin-top":"16px"});
        $("#info_problem_officer").append(info_introduce);
        info_title_name.text(name);

        var info_introduce_title=$("<p id='info_introduce_title'></p>").css({"margin-bottom":"10px", "color":"#fff", "font-size":"16px"});
        info_introduce_title.text(INFO_INTRODUCE_TITLE);
        $("#info_introduce").append(info_introduce_title);

        
        if(name == "" || dob=="" || pob== "" || school == "" || region == "" || system == "" ||resume == ""){
            info_introduce_title.text("该官员信息不完整");
        };
        if(name!=''){
            var info_introduce_name=$("<div id='info_introduce_name' class='info_introduce_name_d'></div>");
            $("#info_introduce").append(info_introduce_name);
            var info_introduce_name_title=$("<p id='info_introduce_name_title' class='info_introduce_name_title_d'></p>");
            $("#info_introduce_name").append(info_introduce_name_title);
            info_introduce_name_title.text(INFO_INTRODUCE_TITLE_NAME);
            var info_introduce_name_text=$("<p class='info_introduce_name_text_d'></p>");
            info_introduce_name_text.text(name);
            $("#info_introduce_name").append(info_introduce_name_text);
        };
         if(age!=''){
            var info_introduce_age=$("<div id='info_introduce_age' class='info_introduce_name_d'></div>");
            $("#info_introduce").append(info_introduce_age);
            var info_introduce_age_title=$("<p class='info_introduce_name_title_d'></p>");
            $("#info_introduce_age").append(info_introduce_age_title);
            info_introduce_age_title.text(INFO_INTRODUCE_TITLE_AGE);
            var info_introduce_age_text=$("<p class='info_introduce_name_text_d'></p>");
            info_introduce_age_text.text(age);
            $("#info_introduce_age").append(info_introduce_age_text);
        };

        if(dob != ""){
             var info_introduce_dob=$("<div id='info_introduce_dob' class='info_introduce_name_d'></div>");
             $("#info_introduce").append(info_introduce_dob);
             var info_introduce_dob_title=$("<p class='info_introduce_name_title_d'></p>");
             $("#info_introduce_dob").append(info_introduce_dob_title);
             info_introduce_dob_title.text(INFO_INTRODUCE_TITLE_DOB);
             var info_introduce_dob_text=$("<p class='info_introduce_name_text_d'></p>");
             info_introduce_dob_text.text(dob);
             $("#info_introduce_dob").append(info_introduce_dob_text);
        };
        if(pob != ""){
            var info_introduce_pob=$("<div id='info_introduce_pob' class='info_introduce_name_d'></div>");
            $("#info_introduce").append(info_introduce_pob);
            var info_introduce_pob_title=$("<p class='info_introduce_name_title_d'></p>");
            $("#info_introduce_pob").append(info_introduce_pob_title);
            info_introduce_pob_title.text(INFO_INTRODUCE_TITLE_POB);
            var info_introduce_pob_text=$("<p class='info_introduce_name_text_d'></p>");
            info_introduce_pob_text.text(pob);
            $("#info_introduce_pob").append(info_introduce_pob_text);
        };
        if(school != ""){
            var info_introduce_school=$("<div id='info_introduce_school' class='info_introduce_name_d'></div>");
            $("#info_introduce").append(info_introduce_school);
            var info_introduce_school_title=$("<p class='info_introduce_name_title_d'></p>");
            $("#info_introduce_school").append(info_introduce_school_title);
            info_introduce_school_title.text(INFO_INTRODUCE_TITLE_SCHOOL);
            var info_introduce_school_text=$("<p class='info_introduce_name_text_d'></p>");
            info_introduce_school_text.text(school);
            $("#info_introduce_school").append(info_introduce_school_text);
        };
        if(region != ""){
            var info_introduce_region=$("<div id='info_introduce_region' class='info_introduce_name_d'></div>");
            $("#info_introduce").append(info_introduce_region);
            var info_introduce_region_title=$("<p class='info_introduce_name_title_d'></p>");
            $("#info_introduce_region").append(info_introduce_region_title);
            info_introduce_region_title.text(INFO_INTRODUCE_TITLE_REGION);
            var info_introduce_region_text=$("<p class='info_introduce_name_text_d'></p>");
            info_introduce_region_text.text(region);
            $("#info_introduce_region").append(info_introduce_region_text);
        };
        if(system != ""){
            var info_introduce_system=$("<div id='info_introduce_system' class='info_introduce_name_d'></div>");
            $("#info_introduce").append(info_introduce_system);
            var info_introduce_system_title=$("<p class='info_introduce_name_title_d'></p>");
            $("#info_introduce_system").append(info_introduce_system_title);
            info_introduce_system_title.text(INFO_INTRODUCE_TITLE_SYSTEM);
            var info_introduce_system_text=$("<p class='info_introduce_name_text_d'></p>");
            info_introduce_system_text.text(system);
            $("#info_introduce_system").append(info_introduce_system_text);
        };
        if(resume != ""){
            var info_introduce_resume=$("<div id='info_introduce_resume' class='info_introduce_name_d'></div>");
            $("#info_introduce").append(info_introduce_resume);
            var info_introduce_resume_title=$("<p class='info_introduce_name_title_d'></p>");
            $("#info_introduce_resume").append(info_introduce_resume_title);
            info_introduce_resume_title.text(INFO_INTRODUCE_TITLE_RESUME);
            var info_introduce_resume_text=$("<p class='info_introduce_name_text_d'></p>");
            info_introduce_resume_text.text(resume);
            $("#info_introduce_resume").append(info_introduce_resume_text);
        };
        $(".info_introduce_name_d").css({"margin-top":"26px","min-height":"26px"});
        $(".info_introduce_name_text_d").css({"margin-left":"63px", "margin-top":"16px", "width":"226px", "color":"#FFF", "font-size":"12px", "line-height":"30px"});
        $(".info_introduce_name_title_d").css({"margin-left":"28px","margin-top":"16px","width":"226px","color":"#FFF","font-size":"16px"});
        
        scrollTop = $(window).scrollTop();
        $("#main").hide();
        $("#menu").hide();
        $("#info").show();
        $("#choose").hide();
        $("#relate").hide();
        document.body.scrollTop = 0;
     };
        $("#info_title_closeButton").click(function(){
            $("#info").hide();
            $("#menu").hide();
            $("#main").hide();
            $("#choose").hide();
            $("#relate").show();
            document.body.scrollTop = scrollTop;
        });
        $("#info").click(function(e){
            e.stopPropagation();
        });

        //end the info

        //load the data
        function findOfficerData(id){
           for(var i=0;i<OfficerData.length;i++){
            if(OfficerData[i].id == id){
                return OfficerData[i];
                //console.log(OfficerData[i]);
            };
           } 
           return null;
    };
});