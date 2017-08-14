const doMain = "http://139.199.192.48:8888"
export default {
  imgDomain: "http://ofv795nmp.bkt.clouddn.com/",

  doMain: doMain,
  getLunbo: doMain + "/api/getlunbo",
  // 新闻接口
  newsList: doMain + "/api/getnewslist" ,
  newsDetails: doMain + "/api/getnew/",
  // 评论接口
  commentPut: doMain + "/api/postcomment/",
  commentList: doMain + "/api/getcomments/",
  // 图片分享
  photoImageList: doMain + "/api/getimages/", // 图片数据列表
  photoCategory: doMain + "/api/getimgcategory", // 图片分类
  photoHumImages: doMain + "/api/getthumimages/", // 缩略图
  photoInfo: doMain + "/api/getimageInfo/" // 图片详情

  
  
}