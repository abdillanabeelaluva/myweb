;/*FB_PKG_DELIM*/

__d("LSClearThreadLimits",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(287).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSOmnistoreSettingsClearThreadLimitsStoredProcedure";a.__tables__=["thread_limits"];e.exports=a}),null);
__d("LSEncryptedBackupsStatusTriggerUpsert",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.sequence([function(a){return b.forEach(b.filter(b.db.table(195).fetch(),function(a){return!0}),function(a){return a["delete"]()})},function(a){return b.db.table(195).add({pk:void 0})}])},function(a){return b.resolve(c)}])}a.__sproc_name__="LSOmnistoreSettingsEncryptedBackupsStatusTriggerUpsertStoredProcedure";a.__tables__=["encrypted_backups_status_trigger"];e.exports=a}),null);
__d("LSEpdCookieSettingsUpsert",["LSGetViewerFBID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(a){return c.storedProcedure(b("LSGetViewerFBID")).then(function(a){return a=a,d[0]=a[0],a})},function(b){return c.db.table(163).put({fbTrackersOnOtherCompanies:a[0],otherCompanyTrackersOnFoa:a[1]})}])},function(a){return c.resolve(e)}])}a.__sproc_name__="LSOmnistoreSettingsEpdCookieSettingsUpsertStoredProcedure";a.__tables__=["epd_cookie_settings"];e.exports=a}),null);
__d("LSStoreProjectConfiguration",["LSBase64Decode.nop","LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(e){return c.nativeOperation(b("LSBase64Decode.nop"),a[4]).then(function(a){return a=a,d[0]=a[0],a})},function(e){return c.blobs.neq(d[0],void 0)?c.db.table(307).put({configId:a[1],projectName:a[0],cipherSuite:a[5],publicKey:d[0],maxEvals:a[2],redemptionLimit:a[3],expirationTimestampMs:a[6],tokenPollFrequencyMs:a[7],maxClientTokenPoolSize:a[8]}):(function(a){c.logger(a).info(a)}("issuing retry for project configurations task since public key was null"),d[1]=new c.Map(),d[1].set("project_name",a[0]),d[2]=d[1].get("project_name"),d[1],d[3]=c.toJSON(d[1]),c.storedProcedure(b("LSIssueNewTask"),["acs_credentials","_",d[2]].join(""),c.i64.cast([0,351]),d[3],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0])))}])},function(a){return c.resolve(e)}])}a.__sproc_name__="LSAnonymousCredentialsStoreProjectConfigurationStoredProcedure";a.__tables__=["secure_acs_configurations"];e.exports=a}),null);