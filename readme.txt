readme
https://www.youtube.com/watch?v=fFNXWinbgro

<<<<<<< HEAD
 
------------------
=======
>>>>>>> f8f8addbecf0140b40e67f7b9fff42ff32cf388c

http://www.yoursite/wp-json   //要先开启 setting/ permalink

wp-json/wp/v2/posts
wp-json/wp/v2/posts/1
wp-json/wp/v2/users


----------
方法用 post，访问 wp-json/wp/v2/posts
在heades:用 content-type: json
----
body: raw下输入下面代码：


{
<<<<<<< HEAD
    "title":" post one",
    "content":"this is post one",
    "status":"publish"
=======
	"title":" post one",
	"content":"this is post one",
	"status":"publish"
>>>>>>> f8f8addbecf0140b40e67f7b9fff42ff32cf388c

}
----------
会得到：提示没有权限
{
    "code": "rest_cannot_create",
    "message": "Sorry, you are not allowed to create posts as this user.",
    "data": {
        "status": 401
    }
}
-------------
安装： JWT Authentication for WP REST API
文档：https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/#description

-------
配置：
.htaccess加：
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1

</IfModule>


----
wp-config.php 加：

define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
define('JWT_AUTH_CORS_ENABLE', true);
---------
然后在postman:
/wp-json/jwt-auth/v1/token | POST
/wp-json/jwt-auth/v1/token/validate | POST

方法：post 访问：/wp-json/jwt-auth/v1/token
header:content-type: json
body的raw:
{
<<<<<<< HEAD
    "username":"admin",
    "password":"你的密码"
=======
	"username":"admin",
	"password":"你的密码"
>>>>>>> f8f8addbecf0140b40e67f7b9fff42ff32cf388c
}
-----
然后出现：
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjI6ODA4MFwvZGVtb1wvd3BcL3dvcmRwcmVzcy01LjIuNFwvd29yZHByZXNzIiwiaWF0IjoxNTczNzIwNDQxLCJuYmYiOjE1NzM3MjA0NDEsImV4cCI6MTU3NDMyNTI0MSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.SCIYwVGv_BGnhX9-Zmo49WNw0VN63GNn9xWejwmX_3I",
    "user_email": "as@asdf.com",
    "user_nicename": "admin",
    "user_display_name": "admin"
}

------------
然后再回到
方法用 post，访问 wp-json/wp/v2/posts
在heades:用 content-type: application/json
Authorization:Bearer空格加上面的token的值



body: raw下输入下面代码：


{
<<<<<<< HEAD
    "title":" post one",
    "content":"this is post one",
    "status":"publish"
=======
	"title":" post one",
	"content":"this is post one",
	"status":"publish"
>>>>>>> f8f8addbecf0140b40e67f7b9fff42ff32cf388c

}
这样就可以添加文章了。
----------


=================
接下来，安装 custom post type ui
然后添加一个type: Books
Show in REST API : true
REST API base slug : books
在最后的post type options 勾上 excerpt 和 author
----
然后去添加内容
好了后, postman 
输入 
wp-json/wp/v2/books
wp-json/wp/v2/books/id
wp-json/wp/v2/books?per_page=1  一页只显示一个

==============
安装 advanced custom fields
acf to rest api

<<<<<<< HEAD
======
接下来用 reactjs
npx create-react-app my-app
cd my-app
npm start

https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
 
https://www.npmjs.com/package/create-react-app

==============



=======
>>>>>>> f8f8addbecf0140b40e67f7b9fff42ff32cf388c






