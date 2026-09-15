/* 语文识字台 · 拼音综合练习（一年级上册 · 汉语拼音专题）
 * 按教材拼音单元分类：单韵母 / 声母 / 复韵母 / 前后鼻韵母 / 整体认读音节
 * 每类两关：①认一认（听音/看形选对）②综合卷（分类、找一找、拼读选择）
 */
window.PINYIN_BANK = {

  groups: [
    { id:'dan', name:'单韵母', color:'#E8823C', members:['a','o','e','i','u','ü'],
      tip:'单韵母是 6 个发音最响亮的小精灵：a o e i u ü' },
    { id:'sm',  name:'声母',   color:'#2E5C4D', members:['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','y','w'],
      tip:'声母像小火车的车头，站在音节最前面' },
    { id:'fu',  name:'复韵母', color:'#A9CFE8', members:['ai','ei','ui','ao','ou','iu','ie','üe','er'],
      tip:'复韵母是两个韵母手拉手组成的，如 ai、ao' },
    { id:'bi',  name:'鼻韵母', color:'#8FBB5F', members:['an','en','in','un','ün','ang','eng','ing','ong'],
      tip:'鼻韵母带鼻音尾巴：an 系列前鼻音，ang 系列后鼻音' },
    { id:'zt',  name:'整体认读', color:'#D0452A', members:['zhi','chi','shi','ri','zi','ci','si','yi','wu','yu','ye','yue','yuan','yin','yun','ying'],
      tip:'整体认读音节要一口气读出来，不能拼' }
  ],

  /* —— 综合练习卷（每关 6 题，混合题型） —— */
  papers: [
    { id:'p1', label:'闯关一', title:'韵母大点名', desc:'单韵母 · 声母基础', paper:[
      { t:'plisten', py:'b', ask:'听一听，是哪个声母？', opts:['b','d','p'], a:'b' },
      { t:'pchoose', ask:'下面哪个是单韵母？', opts:['a','b','m'], a:'a' },
      { t:'pchoose', ask:'下面哪个是声母？', opts:['m','ao','ai'], a:'m' },
      { t:'plisten', py:'mì', ask:'听音节，选出对的写法', opts:['mi','ni','bi'], a:'mi' },
      { t:'psort', ask:'把 b 和 p 分清楚：哪个肚子朝右？', opts:['b','p'], a:'b', tip:'右下半圆 b b b，左下半圆 p p p' },
      { t:'pchoose', ask:'四声练习：mā 是第几声？', opts:['第一声','第二声','第三声'], a:'第一声', tip:'ā 头上一横是第一声' }
    ]},
    { id:'p2', label:'闯关二', title:'韵母手拉手', desc:'复韵母 · 鼻韵母', paper:[
      { t:'pchoose', ask:'ai 是哪两个字母手拉手？', opts:['a 和 i','a 和 o','e 和 i'], a:'a 和 i' },
      { t:'pchoose', ask:'下面哪个是复韵母？', opts:['ao','an','b'], a:'ao' },
      { t:'pchoose', ask:'下面哪个是前鼻音？', opts:['an','ang','ai'], a:'an', tip:'前鼻音舌尖顶住牙齿：an en in' },
      { t:'pchoose', ask:'下面哪个是后鼻音？', opts:['ang','an','en'], a:'ang', tip:'后鼻音舌根抬起来：ang eng ing ong' },
      { t:'plisten', py:'shān', ask:'听音节，选出对的写法', opts:['shan','sang','san'], a:'shan' },
      { t:'pchoose', ask:'er 是什么韵母？', opts:['特殊韵母','声母','整体认读'], a:'特殊韵母', tip:'er 自己就能当一个韵母用' }
    ]},
    { id:'p3', label:'闯关三', title:'整体认读城堡', desc:'整体认读音节专练', paper:[
      { t:'pchoose', ask:'下面哪个是整体认读音节？', opts:['zhi','zha','zhu'], a:'zhi', tip:'zhi chi shi ri zi ci si 要整体记' },
      { t:'pchoose', ask:'"一"的音节怎么写？', opts:['yi','i','li'], a:'yi', tip:'i 自己出门要变大 y：yi' },
      { t:'pchoose', ask:'"五"的音节怎么写？', opts:['wu','u','bu'], a:'wu', tip:'u 自己出门要变大 w：wu' },
      { t:'pchoose', ask:'"月"的音节怎么写？', opts:['yue','ue','ye'], a:'yue' },
      { t:'plisten', py:'yuán', ask:'听音节，选出对的写法', opts:['yuan','yuen','yvan'], a:'yuan' },
      { t:'psort2', ask:'下面哪一组全是整体认读音节？', opts:['zi ci si','z c s','ai ei ui'], a:'zi ci si' }
    ]},
    { id:'p4', label:'综合卷', title:'拼音小博士', desc:'全部类型大混合', paper:[
      { t:'psort2', ask:'哪一组全是单韵母？', opts:['a o e','a b c','ai ei'], a:'a o e' },
      { t:'pchoose', ask:'按顺序：a o e 后面是谁？', opts:['i u ü','b p m','ai ei ui'], a:'i u ü' },
      { t:'pchoose', ask:'j q x 碰上 ü 要怎样？', opts:['脱掉两点再相拼','直接拼','加一点'], a:'脱掉两点再相拼', tip:'小 ü 见 j q x，脱帽行个礼' },
      { t:'plisten', py:'xiǎo niǎo', ask:'听词语，选出对的音节', opts:['xiao niao','shao liao','xiao liao'], a:'xiao niao' },
      { t:'pchoose', ask:'标声调小口诀：有 a 找 a，没 a 找谁？', opts:['o e','i u','b p'], a:'o e', tip:'有 a 找 a，没 a 找 o e，i u 并列标在后' },
      { t:'pchoose', ask:'"月亮"的音节是？', opts:['yue liang','yu lian','lie yang'], a:'yue liang' }
    ]}
  ]
};
