package router

import (
	"github.com/gin-gonic/gin"
	"github.com/mssola/user_agent"
	"myModule/db"
	"myModule/lib"
	"myModule/types"
	"strconv"
	"time"
)

//用户路由
func InitUserRouter(r *gin.RouterGroup) {

	signUp(r)

	signIn(r)
	GetUserInfo(r)
	CheckSignIn(r)
	GetUserMenus(r)
}

//注册接口
func signUp(r *gin.RouterGroup) {
	//用户注册接口
	r.POST(Address["signUp"], func(c *gin.Context) {
		role, _ := strconv.Atoi(c.Request.PostFormValue("role"))
		res := db.SignUp(types.User{
			Username: c.Request.PostFormValue("username"),
			Password: c.Request.PostFormValue("password"),
			Phone:    c.Request.PostFormValue("phone"),
			Email:    c.Request.PostFormValue("email"),
			Role:     role,
			Birthday: lib.StringToTime(c.Request.PostFormValue("birthday") + " 00:00:00.000"),
		})
		c.JSON(200, gin.H{
			"code": res.Code,
			"msg":  res.Msg,
		})
	})
}

//登录接口
func signIn(r *gin.RouterGroup) {
	//用户登录接口
	r.POST(Address["signIn"], func(c *gin.Context) {
		ua := c.Request.Header.Get("user-agent")
		res := db.SignIn(types.User{
			Username: c.Request.PostFormValue("username"),
			Password: c.Request.PostFormValue("password"),
		}, user_agent.New(ua))
		c.JSON(200, gin.H{
			"code":          res.Code,
			"msg":           res.Msg,
			"Authorization": res.Authorization,
		})
	})
}

func GetUserInfo(r *gin.RouterGroup) {
	//获取用户的信息
	r.POST(Address["getUserInfo"], func(c *gin.Context) {
		username, _ := c.Get("username")
		userInfo, err := db.GetUserInfo(username.(string))

		if err == nil {
			c.JSON(200, gin.H{
				"code": 200,
				"msg":  "查询成功！",
				"userinfo": struct {
					Username string
					Email    string
					Phone    string
					Role     int
					Birthday time.Time
				}{
					Username: userInfo.Username,
					Email:    userInfo.Email,
					Phone:    userInfo.Phone[:3] + "****" + userInfo.Phone[6:],
					Role:     userInfo.Role,
					Birthday: userInfo.Birthday,
				},
			})
		} else {
			c.JSON(200, gin.H{
				"code": 406,
				"msg":  "获取用户信息失败！",
			})
		}
	})
}

//监测是否登录
func CheckSignIn(r *gin.RouterGroup) {
	r.POST(Address["checkSignIn"], func(c *gin.Context) {
		c.JSON(200, gin.H{
			"code": 200,
			"msg":  "token有效！",
		})
	})
}

//获取用户的菜单
func GetUserMenus(r *gin.RouterGroup) {
	r.POST(Address["getUserMenus"], func(c *gin.Context) {
		username, _ := c.Get("username")
		userInfo, err := db.GetUserInfo(username.(string))

		userMenus, err := db.GetUserMenus(userInfo.Menus)

		if err == nil {
			c.JSON(200, gin.H{
				"code":  200,
				"msg":   "查询成功！",
				"menus": userMenus,
			})
		} else {
			c.JSON(200, gin.H{
				"code": 406,
				"msg":  "获取用户菜单！",
			})
		}
	})
}
