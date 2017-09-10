var url_TPbasic_single = "https://api.guildwars2.com/v2/commerce/prices/";

function getSinglePrice(id) {
  var html = UrlFetchApp.fetch(url_TPbasic_single + id).getContentText();
  var obj = JSON.parse(html);  
  return obj.sells.unit_price;
} 
