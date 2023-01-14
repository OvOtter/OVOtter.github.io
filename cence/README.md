# PHP

## Install PHP

Follow the step-by-step guide here: https://www.geeksforgeeks.org/how-to-install-php-in-windows-10/

## Host PHP file locally

A sample PHP code for test purpose:

```php
<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!";
?>

</body>
</html
```

- To create a PHP file, paste the above code into your text editor (I used [atom](https://atom.io/) as my text editor) and save as "[name].php".
- Open your command prompt, use "cd" to go to the folder where you saved your PHP file.
- type the commands below

```php
php -S 127.0.0.1:8000 [name].php
```

- note that "8000" can be replaced by any integer from 1024 to 49151
- go to http://127.0.0.1:8000/ (you should see this url in your command prompt as well) in your browser and you should see your PHP file running
- to exit local host in command prompt: Ctrl + Z

# WinSCP

**You must have your NUSNET account ready before doing all steps in this section.**

WinSCP is for more secured transmission of files.

## Connect to SoC VPN

[Download](https://www.fortinet.com/support/product-downloads#vpn) FortiClient VPN. Open it and configure the VPN with reference to the screenshot below:

- webvpn.comp.nus.edu.sg (for you to copy paste)
- Note that username is your NUSNET account username. The "NUSEXT\\" (or whatever) prefix should be excluded.

<img src="C:\szh\noi website\vpn.png" style="zoom:50%;" />

- Click save. Key in your password and then connect. By right you should be have your VPN connected shortly.

### Potential troubleshooting tips

At first I kept getting stuck at "status: 98%" when trying to connect to VPN. I googled about that issue and the workaround which worked for me eventually was to disable IPv6 on the WiFi connection (not sure whether this is relevant but I was using my own hotspot). [Possible tutorial](https://networking.grok.lsu.edu/Article.aspx?articleid=17573) on how to disable IPv6.

Anyway if you stuck at other percentage just go google the exact percentage. There should be a lot relevant resources.

## Connect to WinSCP

[Download](https://winscp.net/eng/download.php) WinSCP and open it.

**Make sure you are still connected to SoC VPN while doing the following steps.**

Click "New Session" to get the pop out below (if it did not automatically appear) and fill in relevant details and then click "login". You can save this site. Password is Prof Tan's name (no space, all lower case).

<img src="C:\szh\noi website\winscp.jpg" style="zoom:50%;" />

After login, you should see all the directories on the right. Files relevant to NOI websites can be found in the folder in the image below.

<img src="C:\szh\noi website\navigate.jpg" style="zoom:50%;" />

# Linux Commands

- sudo su = (switch to the root user without a new login shell?)

- cd = change directory

- ls = directory listing

- ls -al = directory listing with permissions

- mkdir <new_dir> = make a new directory

- cp <file> <path> = copy file to path

- mv <file> <path> = move file to path

- rm <file> = delete the file from the current directory
# Upload Files
1. Transfer the file to the root directory `../../../../home/sadm` from WinSCP

2. [Download](https://chrome.google.com/webstore/detail/secure-shell/iodihamcpbpeioajjeobimgagajmlibd) SSH extension from chrome and run it

3. Enter `sadm@172.25.76.61` and the password to ssh in

4. type `sudo su`

5. Go to the root directory `cd ../../../../home/sadm`

6. Move the file in the root directory to your desired directory using "mv" command

# Explanations for Different Files for NOI Websites
- `header.php`: all the headers (including the relevant dropdowns)
- Result pages are maintained by separate PHP files (you can see the file name in the URL of the page)
