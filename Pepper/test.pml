<?xml version="1.0" encoding="UTF-8" ?>
<Package name="test" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="Hello" src="Hello/Hello.dlg" />
    </Dialogs>
    <Resources>
        <File name="index" src="html/index.html" />
        <File name="jquery-1.11.2.min" src="html/jquery-1.11.2.min.js" />
        <File name="sample" src="html/js/sample.js" />
        <File name="sample" src="html/js/sample.js~" />
        <File name="app" src="app.py~" />
        <File name="Hello_frf" src="Hello/Hello_frf.top~" />
        <File name="style" src="html/style.css" />
        <File name="style" src="html/style.css~" />
        <File name="logo" src="html/logo.png" />
        <File name="plan" src="html/plan.jpg" />
        <File name="README" src="README.txt" />
        <File name="README" src="README.txt~" />
        <File name="README~" src="README~" />
        <File name="VSWorkspaceState" src=".vs/VSWorkspaceState.json" />
        <File name="slnx" src=".vs/slnx.sqlite" />
        <File name="qiproject" src="qiproject.xml" />
        <File name="myapp" src="myapp.pml" />
        <File name="myservice" src="myservice.py" />
        <File name="laitfrigo1" src="html/laitfrigo1.jpg" />
        <File name="01_script_hello" src="01_script_hello.py" />
    </Resources>
    <Topics>
        <Topic name="Hello_frf" src="Hello/Hello_frf.top" topicName="Hello" language="fr_FR" />
        <Topic name="ExampleDialog_enu" src="behavior_1/ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
        <Topic name="ExampleDialog_frf" src="behavior_1/ExampleDialog/ExampleDialog_frf.top" topicName="ExampleDialog" language="fr_FR" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
        <Translation name="translation_fr_FR" src="translations/translation_fr_FR.ts" language="fr_FR" />
    </Translations>
</Package>
