var MyApp=new Object();MyApp.Func=new Object();MyApp.Constant=new Object();MyApp.Global=new Object();MyApp.Global.Singlev=false;MyApp.Global.HideCDP=false;MyApp.Constant.PROMO_CODES='promo_codes';MyApp.Constant.POPUP_CONTENT='popup_content';MyApp.Func.PromoCodesExist=function(){if(document.getElementById(MyApp.Constant.PROMO_CODES)){return true;}return false;};MyApp.Func.PromoPopupContent=function(){var i=0;var promo_pieces=null;var element=document.getElementById(MyApp.Constant.PROMO_CODES);var hidden=document.getElementById(MyApp.Constant.POPUP_CONTENT);var html_text='';var len=0;var style='';var width=0;var line_width=0;var retval=[];var class_string=null;if(!element){return null;}html_text="<link rel='stylesheet' type='text/css' href='/stylecss/cars.css' media='all' />\n"+"<div class='popup' id='container''><div class='cars_coupons'><table id='pop_promo_table' border='0' cellpadding='0' cellspacing='0'>\n"+"<tr>\n"+"<th>Coupon</th>\n"+"<th>Description</th>\n"+"</tr>\n";promo_pieces=element.value.split('|');len=promo_pieces.length;for(i=0;i<len;i+=2){class_string=(i%2)?" class='even' ":"";html_text+="<tr"+class_string+">\n"+"<td><a href='#' onclick='javascript: document.forms[0].promoCode1.value = \""+promo_pieces[i]+"\"; tb_remove(); return false;"+"'>"+promo_pieces[i]+"</a></td>"+"<td>"+promo_pieces[i+1]+"</td>\n"+"</tr>\n";line_width=promo_pieces[i].length+promo_pieces[i+1].length;if(width<line_width){width=line_width;}}html_text+="    </table>\n</div\n></div>\n";hidden.innerHTML=html_text;retval['html']=html_text;retval['height']=len/2;retval['width']=width;return retval;;};function unHiderPick(){var where=document.getElementById("where");if(where.value=="airport"){document.getElementById("airport").style.display='block';document.getElementById("address").style.display='none';document.getElementById("poi").style.display='none';}if(where.value=="address"){document.getElementById("airport").style.display='none';document.getElementById("address").style.display='block';document.getElementById("poi").style.display='none';}if(where.value=="poi"){document.getElementById("airport").style.display='none';document.getElementById("address").style.display='none';document.getElementById("poi").style.display='block';}}function dropOff(){var drop=document.getElementById("diff").checked;if(drop){document.getElementById("dropoff_diff").style.display='block';}else{document.getElementById("dropoff_diff").style.display='none';}}function fieldsHandler(preferred_vendor){var drop=document.getElementById("companypref").checked;clearValuesDiv();if(drop){if(document.getElementById("vendor").value=='BV'){document.getElementById("discounts").style.display='block';preselectDiscountCompanies(preferred_vendor);}else{completeFields(1,document.getElementById("vendor").value,1,preferred_vendor);}}else{document.getElementById("discounts").style.display='none';}}function unHiderDrop(){var where=document.getElementById("dwhere");if(where.value=="doairport"){document.getElementById("dairport").style.display='block';document.getElementById("daddress").style.display='none';document.getElementById("dpoi").style.display='none';}if(where.value=="doaddress"){document.getElementById("dairport").style.display='none';document.getElementById("daddress").style.display='block';document.getElementById("dpoi").style.display='none';}if(where.value=="dopoi"){document.getElementById("dairport").style.display='none';document.getElementById("daddress").style.display='none';document.getElementById("dpoi").style.display='block';}}function change(id,newClass){identity=document.getElementById(id);identity.className=newClass;}function show(idLayer){document.getElementById(idLayer).style.display='block';}function showInline(idLayer){document.getElementById(idLayer).style.display='inline';}function hide(idLayer){document.getElementById(idLayer).style.display='none';}function newWindow(url){urlWindow=window.open(url,'AirportCodes','width=450,height=350');urlWindow.focus;}function monthChange(monthSelect){if((monthSelect.name=='pudate_mo')&&(document.CarSearch.dodate_mo.selectedIndex<monthSelect.selectedIndex)){document.CarSearch.dodate_mo.selectedIndex=monthSelect.selectedIndex;}}function dayChange(daySelect){selected=daySelect.selectedIndex;if((daySelect.name=='pudate_dy')&&(document.CarSearch.dodate_dy.selectedIndex<selected+1)&&(document.CarSearch.dodate_mo.selectedIndex<=document.CarSearch.pudate_mo.selectedIndex)){if(selected<daySelect.length-1){document.CarSearch.dodate_dy.selectedIndex=selected+1;}else{document.CarSearch.dodate_mo.selectedIndex+=1;document.CarSearch.dodate_dy.selectedIndex=0;}}}function validate(form){re=/S+/;if(!re.test(form.pucity.value)){alert('Please enter a pick-up city');return false;}return true;}function check_area(){var number=document.CarSearch.puwhere.selectedIndex;if(document.CarSearch.puwhere.options[number].value=='CITY'){document.CarSearch.area.selectedIndex=1;}else if(document.CarSearch.puwhere.options[number].value=='AIRPORT'){document.CarSearch.area.selectedIndex=-1;}return true;}function update_docity(){if(document.CarSearch.docity.value){document.CarSearch.same.checked=false;}return true;}function clear_docity(){document.CarSearch.docity.value="";return true;}function check_dropoff(){if(document.CarSearch.same.checked==true){clear_docity();}return true;}function submit_to(){update_docity();var pickup=document.CarSearch.pucity.value;var dropoff=document.CarSearch.docity.value;var whitesp=/[ \t\n\r\f\v]/g;var newpu=pickup.replace(whitesp,"");var newdo=dropoff.replace(whitesp,"");var pucity=new String(newpu);var docity=new String(newdo);if(pucity.length!=3){alert('Invalid or missing pick up airport code');return false;}if(docity.length>1){if(docity.length!=3){alert('Invalid or missing drop off airport code');return false;}}var number=document.CarSearch.puwhere.selectedIndex;var selvendor=document.CarSearch.vendor.selectedIndex;if(document.CarSearch.puwhere.options[number].value=='CITY'){var ven=new String(document.CarSearch.vendor.options[selvendor].value);if(ven.length==0){alert('Please select a Rental Company preference for city searches.');return false;}}var number=document.CarSearch.puwhere.selectedIndex;if(document.CarSearch.puwhere.options[number].value=='CITY'){document.CarSearch.action="/nexres/cars/locations.cgi";}else if(document.CarSearch.puwhere.options[number].value=='AIRPORT'){document.CarSearch.action="/nexres/cars/results.cgi";}document.CarSearch.submit();}function reset_form(){document.CarSearch.pucity.value="";document.CarSearch.docity.value="";document.CarSearch.area.selectedIndex=-1;document.CarSearch.vendor.selectedIndex=-1;document.CarSearch.carcode.selectedIndex=-1;document.CarSearch.currency.selectedIndex=-1;return true;}function completeFields(id,company_id,rental,preferred_vendor){var text;var values;if('BV'==company_id){company_id=document.getElementById("vendor").value;}values=fieldValues(company_id);if(company_id==preferred_vendor){text=completeText(id,values,company_id,1);}else{text=completeText(id,values,company_id);}if(rental){clearValuesDiv();if(document.getElementById("vendor").value!='BV'){document.getElementById("discounts").style.display='none';document.getElementById("discounts_rental").innerHTML=text;if(document.getElementById("companypref").checked){document.getElementById("discounts_rental").style.display='block';}else{document.getElementById("discounts_rental").style.display='none';}}else{if(document.getElementById("companypref").checked){document.getElementById("discounts").style.display='block';preselectDiscountCompanies(preferred_vendor);}}}else{if(company_id){document.getElementById("providerFields"+id).innerHTML=text;}else{clearValuesDiv(id);}}return 1;}function fieldValues(code){var returnArray=new Array();var promo_codes_exist=MyApp.Func.PromoCodesExist();for(var i=0;i<companyDiscounts.length;i=i+4){if(companyDiscounts[i]==code){returnArray[0]=companyDiscounts[i+1];returnArray[1]=companyDiscounts[i+2];if(promo_codes_exist&&('null'!=companyDiscounts[i+3])){MyApp.Func.PromoPopupContent();returnArray[2]='<a href="javascript:void(null);" onClick="tb_show(null, \'TB_inline?height=500&width=400&inlineId=popup_content\', null);">'+companyDiscounts[i+3]+'</a>';}else{returnArray[2]=companyDiscounts[i+3];}break;}}return returnArray;}function completeText(id,values,company_id,preferred_vendor){var headlines="";var legend="";var input_fields="";var promo_coupons="";if(values[0]!='null'){headlines+="<td>"+values[0]+"</td>";input_fields+="<td><input ID=\"frequentRenter"+id+"\" NAME=\"frequentRenter"+id+"\" type=\"text\" onfocus=\"change('frequentRenter"+id+"','focused');\" onblur=\"change('frequentRenter"+id+"','UNfocused');\" style=\"width:90px\"></td>";}if(MyApp.Global.Singlev&&document.getElementById("vendor").value!=company_id){legend="<td colspan=\"2\">Your Selection: <b>"+searchCarRental(company_id)+"</b></td>";}if(values[1]!='null'){var code=searchDiscountCode(company_id);if(MyApp.Global.HideCDP&&code!=""){headlines+="<td></td>";input_fields+="<td><input ID=\"discountNumber"+id+"\" NAME=\"discountNumber"+id+"\" type=\"hidden\" value = \""+code+"\" ></td>";}else{headlines+="<td>"+values[1]+"</td>";input_fields+="<td><input ID=\"discountNumber"+id+"\" NAME=\"discountNumber"+id+"\" type=\"text\" onfocus=\"change('discountNumber"+id+"','focused');\" onblur=\"change('discountNumber"+id+"','UNfocused');\" value = \""+code+"\" style=\"width:90px\"></td>";}}if(values[2]!='null'){headlines+="<td>"+values[2]+"</td>";input_fields+="<td><input ID=\"promoCode"+id+"\" NAME=\"promoCode"+id+"\" type=\"text\" onfocus=\"change('promoCode"+id+"','focused');\" onblur=\"change('promoCode"+id+"','UNfocused');\" style=\"width:90px\"></td>";}if(preferred_vendor&&values[2]!='null'){var coupon_content=getCouponContent(id);promo_coupons+="<tr><td colspan=\"3\"><div class=\"promo-coupon-box\" id =\"promocoupons_selector_div_"+id+"\">"+coupon_content+"</div></td></tr>";}var main_text="<table style=\"width:100%\"><tr>"+legend+"</tr><tr>"+headlines+"</tr><tr>"+input_fields+"</tr>"+promo_coupons+"</table>";return main_text;}function clearValuesDiv(id){if(id){document.getElementById('providerFields'+id).innerHTML="";document.getElementById('discountProvider'+id).value="";}else{for(var i=1;i<=5;i++){document.getElementById('providerFields'+i).innerHTML="";document.getElementById('discountProvider'+i).value="";}document.getElementById('discounts_rental').innerHTML="";}}function searchDiscountCode(company_id){for(var i=0;i<corporateDiscountCodes.length;i=i+2){if(corporateDiscountCodes[i]==company_id){return corporateDiscountCodes[i+1];}}return"";}function searchCarRental(company_id){for(var i=0;i<carRentals.length;i=i+2){if(carRentals[i]==company_id){return carRentals[i+1];}}return"";}function preselectDiscountCompanies(preferred_vendor){var count=1;for(var i=0;i<corporateDiscountCodes.length;i=i+2){document.getElementById("discountProvider"+count).value=corporateDiscountCodes[i];completeFields(count,corporateDiscountCodes[i],0,preferred_vendor);count++;}return 0;}function getCouponContent(id){var html_content=document.getElementById('car-promos').innerHTML;html_content+='<input value="'+id+'" type="hidden" id="promocoupons_selector_div_'+id+'_hidden"/>'
return html_content;}function selectPromoCode(code,div_id){var id=document.getElementById(div_id+'_hidden').value;document.getElementById('promoCode'+id).value=code;}function buildTermsConditionsPopup(conditions){var text="<html><head><title>Terms & Conditions</title>";text+="<style>html{font-family:Arial, Helvetica, sans-serif;font-size: 62.5%; /* Sets 1.0em == 10px, 0.5em == 5px, etc. */margin: 0px;padding: 0px;}div.terms h1 {font-size: 1.2em;margin: 0px 0px 10px 0px;padding: 0px 10px;}div.terms p{font-size: 1.1em;line-height:1.4em;margin: 0px 0px 0px 0px;padding: 0px 10px;}</style>";text+="</head><body><div class=\"terms\">";text+="<p>"+conditions+"</p></div></body>";var width=400;var height=400;var left=(screen.width/2)-(width/2);var top=(screen.height/2)-(height/2);var mywin=window.open("","_blank","width="+width+",height="+height+",top="+top+",left="+left+",location=0,scrollbars=1,resizable=0,status=0,toolbar=0,menubar=0,directories=0");mywin.document.write(text);}function buildForcePreferredParameters(forceVendor){var forceParams=new Array("frequentRenter2","discountNumber2","promoCode2");document.getElementById('discountProvider2').value=forceVendor;for(var i=0;i<forceParams.length;i++){var element=document.createElement("input");element.setAttribute("type","hidden");element.setAttribute("name",forceParams[i]);if(forceParams[i]=="discountNumber2"){element.setAttribute("value",searchDiscountCode(forceVendor));}else{element.setAttribute("value","");}document.forms['CarSearch'].appendChild(element);}}