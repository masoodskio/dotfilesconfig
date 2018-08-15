User=function(e,t,n,i){var s;this._username=e,this._accountClass=t,this._roleName=i,this._element=null,this._userMenuText=null,this._identities=n,this._identityDropdown=null,(s=this).identityEnableCallback=function(e){if(s._identityDropdown&&s._identityDropdown.setValue(e._data.deciname,!1),s._userMenuText.children().detach(),e instanceof AllIdentity)s._userMenuText.append(s._userInfo);else{var t=LPTools.createElement("ul","userMenuText");t.appendChild(LPTools.createElement("li","userMenuTextSingle truncateShort",e.getName())),s._userMenuText.append(t)}},s.identityAddedCallback=function(e){s._identities.push(e),s._identityDropdown?s._identityDropdown.setIdentities(s._identities):s.initializeIdentityDropdown(s._element.get(0).firstChild)},Topics.get(Topics.IDENTITY_ENABLE).subscribe(s.identityEnableCallback),Topics.get(Topics.IDENTITY_ADDED).subscribe(s.identityAddedCallback)},function(e){User.prototype.destruct=function(){this._element.unbind(),this._element.empty(),this._userMenuText.empty(),Topics.get(Topics.IDENTITY_ENABLE).unsubscribe(this.identityEnableCallback),Topics.get(Topics.IDENTITY_ADDED).unsubscribe(this.identityAddedCallback),this._username=null,this._accountClass=null,this._roleName=null,this._element=null,this._userMenuText=null,this._identities=null,this._identityDropdown=null};var t=function(e,t,n,i,s){(s=s||{}).id=n,s.class="menuListItem";var l=LPTools.createElement("li"),o=LPTools.createElement(t,s);return o.textContent=i,l.appendChild(o),e.appendChild(l),l};User.prototype.initializeIdentityDropdown=function(e){var t=LPTools.createElement("li","menuListHeader identityDropdownMenuItem");t.appendChild(LPTools.createElement("div",{id:"identityDropdownContainer"})),t.children[0].appendChild(LPTools.createElement("img",{id:"identityDropdownIcon",src:"images/vault_4.0/Identity_Avatar.png"}));var n=LPTools.createElement("div");t.children[0].appendChild(n);var i=LPTools.createElement("input",{id:"identityDropdown",class:"dialogInput selectDropdown",type:"text"});n.appendChild(i),e.insertBefore(t,e.firstChild),this._identityDropdown=new IdentityDropdown(i,this._identities);for(var s=0,l=this._identities.length;s<l;++s){var o=this._identities[s];o._enabled&&this._identityDropdown.setValue(o.getName(),!1)}LPPlatform.addEventListener(t,"click",function(e){e.stopPropagation()}),$(t.nextElementSibling).addClass("divider")},User.prototype.initialize=function(e,n){e.empty();var i=LPTools.createElement("ul");if(this._userInfo=LPTools.createElement("ul","userMenuText"),this._userInfo.appendChild(LPTools.createElement("li","userMenuTextPrimary truncateShort",this._username)),this._accountClass===Constants.USER_ENTERPRISE_ROLE){var s=Strings.translateString(this._accountClass===Constants.USER_ENTERPRISE_ROLE?Strings.translateString("Enterprise"):Strings.translateString("Teams"));s+=" ",s+=this._roleName,s+=" ",s+=Strings.translateString("User"),this._userInfo.appendChild(LPTools.createElement("li","userMenuTextSecondary",s))}else if(LPProxy.isFamilyUser()){var l=this._accountClass===Constants.USER_FAMILY_ADMIN?"Family manager":"Family member";this._userInfo.appendChild(LPTools.createElement("li","userMenuTextSecondary",Strings.translateString(l)))}else this._userInfo.appendChild(LPTools.createElement("li","userMenuTextSecondary",Strings.translateString(this._accountClass)));n.append(this._userInfo),LPFeatures.allowOmarIA()||LPFeatures.block30()||$(t(i,"div","vaultToggleIcon",Strings.Vault.VAULT_TOGGLE)).bind("click",function(){bg.VaultToggle.toggleVault3_0()}),$(t(i,"div","accountSettingsIcon",Strings.Vault.ACCOUNT_SETTINGS)).bind("click",function(){Topics.get(Topics.EDIT_SETTINGS).publish({source:"accountdropdown"})}),$(t(i,"a","helpCenterIcon",Strings.Vault.HELP_CENTER,{href:"https://lastpass.com/support_helpcenter.php",target:"_blank"})).bind("click",function(){window.open("https://lastpass.com/support_helpcenter.php")}),$(t(i,"div","logoutIcon",Strings.Vault.LOGOUT)).bind("click",LPProxy.logout),e.append(i),this._identities.length>1&&this.initializeIdentityDropdown(i),this._element=e,this._userMenuText=n},User.prototype.isFreeOrTrial=function(){return this._accountClass===Constants.USER_FREE||this._accountClass===Constants.USER_PREMIUM_TRIAL},User.prototype.isFree=function(){return this._accountClass===Constants.USER_FREE}}(document);
//# sourceMappingURL=sourcemaps/vaultModel.js.map
