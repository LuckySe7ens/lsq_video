<template>
    <div>
        <template v-for="(video, index) in videos">
            <div v-if="index%3 == 0">
                <el-row :gutter="40" style="padding-bottom: 20px">
                    <el-col :span="8">
                        <div class="block">
                            <router-link :to="{path:'/movie', query:{url:video.Url}}">
                                <el-image :src="video.Picture" class="el-image__inner--center"> //style="width: 300px; height: 300px"
                                    <div slot="placeholder" class="image-slot">
                                        加载中<span class="dot">...</span>
                                    </div>
                                    <div slot="error" class="image-slot">
                                        <i class="el-icon-picture-outline"></i>
                                    </div>
                                </el-image>
                            </router-link>
                        </div>
                        <div><H3 style="width: auto">{{video.Name}}</H3></div>
                    </el-col>
                    <div v-if="videos[index+1]">
                        <el-col :span="8">
                            <div class="block">
                                <router-link :to="{path:'/movie', query:{url:videos[index+1].Url}}" >
                                    <el-image :src="videos[index+1].Picture" :fit="fill" class="el-image__inner--center">
                                        <div slot="placeholder" class="image-slot">
                                            加载中<span class="dot">...</span>
                                        </div>
                                        <div slot="error" class="image-slot">
                                            <i class="el-icon-picture-outline"></i>
                                        </div>
                                    </el-image>
                                </router-link>
                            </div>
                            <div><H3 style="width: auto">{{videos[index+1].Name}}</H3></div>
                        </el-col>
                    </div>
                    <div v-if="videos[index+2]">
                        <el-col :span="8">
                            <div class="block">
                                <router-link :to="{path:'/movie', query:{url:videos[index+2].Url}}">
                                    <el-image :src="videos[index+2].Picture" class="el-image__inner--center">
                                        <div slot="placeholder" class="image-slot">
                                            加载中<span class="dot">...</span>
                                        </div>
                                        <div slot="error" class="image-slot">
                                            <i class="el-icon-picture-outline"></i>
                                        </div>
                                    </el-image>
                                </router-link>
                            </div>
                            <div><H3 style="width: auto">{{videos[index+2].Name}}</H3></div>
                        </el-col>
                    </div>

                </el-row>
            </div>
        </template>

        <el-footer>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    @prev-click="handlerPreClick"
                    @next-click="handlerNextClick"
                    :current-page="page"
                    :page-sizes="[15, 30, 45, 60]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </el-footer>
    </div>

</template>

<script>
    import {post} from "../../plugins/axios";

    export default {
        data() {
            return {
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594904270286&di=d7d5c32e59daef850fb62e23c8a89265&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1896723734%2C3975110576%26fm%3D214%26gp%3D0.jpg',
                videos:[{"Id":1,"CateId":1,
                    "Name":"上海大学资优生",
                    "Picture":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594904270286&di=d7d5c32e59daef850fb62e23c8a89265&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1896723734%2C3975110576%26fm%3D214%26gp%3D0.jpg",
                    "Url":"https://m3u8.40cdn.com/video-hls/89/2020/06/VaKEbdyy/hls/VaKEbdyy1111.m3u8",
                    "Type":1,
                    "Dt":1234567890}],
                cateId: 1,
                pageSize: 15,
                page: 1,
                total:0
            }
        },
        computed: {},
        methods: {
            getList(){
                post('/video/getList',{
                    "cateId":this.cateId,
                    "size":this.pageSize,
                    "page":this.page
                }).then((data) =>{
                    this.total = data.data.size;
                    this.videos = data.data.data;
                })
            },
            playVideo(url,type){

            },
            handleSizeChange(val){
                this.pageSize = val;
            },
            handleCurrentChange(val){
                this.page = val;
            },
            handlerPreClick(){
                this.page = this.page -1;
            },
            handlerNextClick(){
                this.page = this.page + 1;
            }
        },
        mounted(){
            this.getList();
        },
        watch: {
            'pageSize': function () {
                this.getList();
            },
            'page': function () {
                this.getList();
            },
            'cateId': function () {
                this.getList();
            }
        }
    }
</script>

<style>
    .el-image {
        cursor:pointer;
    }
    h3 {
        font-size: 12px;
    }
</style>