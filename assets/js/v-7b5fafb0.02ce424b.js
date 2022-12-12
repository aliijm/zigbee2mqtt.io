"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[41010],{409794:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-7b5fafb0","path":"/devices/TS0216.html","title":"TuYa TS0216 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0216 control via MQTT","description":"Integrate your TuYa TS0216 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-01T12:47:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Volume (numeric)","slug":"volume-numeric","link":"#volume-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1670864491000},"filePathRelative":"devices/TS0216.md"}')},7030:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var i=a(166252);const l=(0,i._)("h1",{id:"tuya-ts0216",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-ts0216","aria-hidden":"true"},"#"),(0,i.Uk)(" TuYa TS0216")],-1),o=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"TS0216")],-1),d=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Sound and flash siren")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, alarm, volume, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0216.jpg",alt:"TuYa TS0216"})])],-1),c=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),m=(0,i._)("ol",null,[(0,i._)("li",null,"Power on the device"),(0,i._)("li",null,"Press both the volume + and volume - buttons for more than 5 seconds")],-1),p=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id="volume-numeric" tabindex="-1"><a class="header-anchor" href="#volume-numeric" aria-hidden="true">#</a> Volume (numeric)</h3><p>Volume of siren. Value can be found in the published state on the <code>volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),b={},v=(0,a(983744).Z)(b,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),l,(0,i._)("table",null,[o,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(a,{to:"/supported-devices/#v=TuYa"},{default:(0,i.w5)((()=>[(0,i.Uk)("TuYa")])),_:1})])]),r,u,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,h,m,(0,i.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);