# Selenium Chrome Addon
Chrome addon webextension to test websites with Basic Authentication using Selenium

*Usage:*
1. Inspect (F12) the request in Network Tab of Developer tools
2. Look fo the Authorization code in the _Request Headers_ like below
<pre>
GET /basic-auth/user/passwd HTTP/1.1
Host: httpbin.org
Connection: keep-alive
Authorization: Basic dXNlcjpwYXNzd2Q=
</pre>
3. Clone or Download the Repo to a folder
4. Edit the `background.js` and insert the Authorization code in the line no:4 `details.requestHeaders.push({name: "Authorization",value: "Basic dXNlcjpwYXNzd2Q="});`
5. Modify the Selenium code with the same folder
```java
from selenium import webdriver

# Set Chrome options.
options = webdriver.ChromeOptions()
# Modify the path of the folder
options.add_argument('--load-extension=path/to/the/extension/folder')

driver = webdriver.Chrome(chrome_options=options)
driver.get('https://httpbin.org/basic-auth/user/passwd')
# Your Code goes here...
driver.quit()
 ```
