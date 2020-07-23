<style>
    .nav_list {
        width: 200px;
        border-bottom: 1px solid #2C3E50;
        background: #42B983;
        text-align: left;
        font-size: 14px;
        color: #fff;
    }

    .nav_list_con {
        width: 100%;
        height: 35px;
        line-height: 35px;
        padding-left: 20px;
    }

    .nav_child,
    ..nav_c_r_list {
        display: block;
        height: 30px;
        text-align: left;
        line-height: 30px;
        background: #2C3E50;
        color: #fff;
        padding-left: 40px;
        border-bottom: #D3DCE6;
    }

    .nav_child_con {
        background: #2B3245;
    }

    .nav_child_con,
    .nav_child_r {
        height: auto;
        width: 100%;
        display: none;
    }

    .nav_child P {
        margin: 0;
        padding: 0;
        height: 30px;
        line-height: 30px;
        padding-left: 40px;
        border-bottom: 1px solid #efefef;
    }

    .r_sp {
        display: block;
        height: 30px;
        line-height: 30px;
        padding-left: 50px;
    }

    .nav_c_r_list {
        background: salmon;
    }

    .nav_active {
        display: block !important;
    }
</style>
<template>
    <div class="nav_con">
        <!-- 一级导航 -->
        <div class="nav_list" v-for="(items,index) in  nav_data">
            <div class="nav_list_con" @click="nav_ck(index)">{{items.name}}</div>
            <!-- 二级导航 -->
            <div class="nav_child_con " :class="{nav_active:nav_index==index}">
        <span class="nav_child" v-for="(itema,indexs) in items.children">

          <!-- 判断没有三级导航的时候 -->
          <p @click="nav_r_ck(indexs)" v-if="itema.name==undefined"> {{itema}}</p>
          <p @click="nav_r_ck(indexs)" v-else=""> {{itema.name}}</p>

            <!-- 三级导航 -->
          <div class="nav_child_r" v-if="itema.name!=undefined" :class="{nav_active:nav_r_index==indexs}">
            <span class="nav_c_r_list r_sp" v-for="itemf in itema.childrens">{{itemf}}</span>
          </div>
        </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default ({
        data() {
            return {
                nav_data: [{
                    name: '首页',
                    children: [{
                        name: '网站导航',
                        childrens: ['三级导航一', '三级导航二', '三级导航三']
                    },
                        {
                            name: '企业简介',
                            childrens: ['文化内容', '企业内容', '企业愿景']
                        },
                        {
                            name: '企业文化',
                            childrens: ['公司业务', '公司领导', '公司文化']
                        }
                    ],
                },
                    {
                        name: '一号机房',
                        children: [{
                            name: '机房温度配电',
                            childrens: ['配电一', '配电二', '配电三']
                        },
                            {
                                name: '共公空调管控',
                                childrens: ['厕所空调管控', '厨房空调管控', '楼梯空调管控']
                            },
                            {
                                name: '共公照明管控',
                                childrens: ['厕所共公照明', '厨房共公照明', '楼梯共公照明']
                            }
                        ],
                    },
                    {
                        name: '二号机房',
                        children: [{
                            name: '办公用电',
                            childrens: ['一楼', '二楼', '三楼']
                        },
                            {
                                name: '办公空调',
                                childrens: ['一楼空调管控', '二楼空调管控', '三楼空调管控']
                            },
                            {
                                name: '办公照明',
                                childrens: ['一楼照明', '二楼共公照明', '三楼共公照明']
                            }
                        ],
                    },
                    {
                        name: '生活区',
                        children: ['宿舍照明', '宿舍空调', '宿舍公共']
                    },
                    {
                        name: '恋爱区',
                        children: ['浪漫树配电', '跑马灯用电', '娱乐用电']
                    },
                ],
                nav_index: 0,
                nav_r_index: 0,
                nav_is: false
            }
        },
        methods: {
            nav_ck: function(index) {
                this.nav_index = index;
                this.nav_r_index = 0
            },
            nav_r_ck: function(indexs) {
                console.log(indexs)
                this.nav_r_index = indexs
            }
        }
    })
</script>