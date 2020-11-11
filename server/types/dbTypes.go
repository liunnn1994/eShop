package types

import (
	"gorm.io/gorm"
	"time"
)

//用户表
type User struct {
	gorm.Model
	//用户名
	Username string
	Password string
	Email    string
	Phone    string
	//角色
	Role     int
	Birthday time.Time
	//储存密码时的盐
	Salt string
	//菜单的ID集合
	Menus string
}

//店铺信息
type ShopInfo struct {
	gorm.Model
	Name string
	//门店简介
	Introduction string
	//首页的后缀
	Suffix string
	Phones string
	Email  string
}

//面板的菜单
type DashboardMenu struct {
	gorm.Model
	Title    string
	Path     string
	Icon     string
	ParentID int
}