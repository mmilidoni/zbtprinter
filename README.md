# zbtprinter
A Cordova/Phonegap driver for Zebra bluetooth printers

##Usage
You can send data in ZPL Zebra Programing Language:

```
cordova.plugins.zbtprinter.print("^XA^FO10,10^AFN,26,13^FDHello, World!^FS^XZ",
    function(success) { 
        alert("Print ok"); 
    }, function(fail) { 
        alert(fail); 
    }
);
```

##Install
###Cordova

```
cordova plugin add https://github.com/mmilidoni/zbtprinter.git
```

###Very important!

This plugin is in developer version, you need to set MAC Address of your printer at following file:

```
src/android/it/zenitlab/cordova/plugins/zbtprinter/ZebraBluetoothPrinter.java
```

##ZPL - Zebra Programming Language
For more information about ZPL please see the  [PDF Official Manual](https://support.zebra.com/cpws/docs/zpl/zpl_manual.pdf)
