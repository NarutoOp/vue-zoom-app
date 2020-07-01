<template>
    <div class="w-100">
        <div id="accordion">
            <b-card no-body style="background: black;margin-bottom: 15px;">
                <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion1 style="border-radius:9px;">
                    <h5 class="mb-0 text-light">
                        Question #1
                    </h5>
                </b-card-header>
                <b-collapse id="accordion1" accordion="my-accordion">
                    <b-card-body style="padding: 1vh !important;">
                        <img class="qimgs" src="@/assets/a-img/q1-black.png" alt="" srcset=""
                                    style="width: 87%">
                        <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.answer1>
                            <h5 class="mb-0 text-light">
                                Answer #1
                            </h5>
                        </b-card-header>
                        <b-collapse id="answer1">
                            <img class="" src="@/assets/a-img/theory2.png" alt="" srcset="" style="width: 87%">
                                <video style="width: 100%;margin:0 auto;" id="my_video_1"
                                    class="video-js mt-4" data-setup='{"fluid": true}' controls
                                    width="100%" height="auto" preload="auto" controlsList="nodownload">
                                    <source
                                        src="https://player.vimeo.com/external/324803554.hd.mp4?s=242ebea7537de4f6432cb6b7cda4b969800b8724&profile_id=174"
                                        type="video/mp4">

                                </video>
                        </b-collapse>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body style="background: black;margin-bottom: 15px;">
                <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion2 style="border-radius:9px;">
                    <h5 class="mb-0 text-light">
                        Question #2
                    </h5>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion">
                    <b-card-body style="padding: 1vh !important;">
                        <img class="qimgs" src="@/assets/a-img/q1-black.png" alt="" srcset=""
                                    style="width: 87%">
                        <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.answer2>
                            <h5 class="mb-0 text-light">
                                Answer #2
                            </h5>
                        </b-card-header>
                        <b-collapse id="answer2">
                            <img class="" src="@/assets/a-img/theory2.png" alt="" srcset="" style="width: 87%">
                                <video style="width: 100%;margin:0 auto;" id="my_video_1"
                                    class="video-js mt-4" data-setup='{"fluid": true}' controls
                                    width="100%" height="auto" preload="auto" controlsList="nodownload">
                                    <source
                                        src="https://player.vimeo.com/external/324803554.hd.mp4?s=242ebea7537de4f6432cb6b7cda4b969800b8724&profile_id=174"
                                        type="video/mp4">

                                </video>
                        </b-collapse>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body style="background: black;margin-bottom: 15px;">
                <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion3 style="border-radius:9px;">
                    <h5 class="mb-0 text-light">
                        Question #3
                    </h5>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion">
                    <b-card-body style="padding: 1vh !important;">
                        <img class="qimgs" src="@/assets/a-img/q1-black.png" alt="" srcset=""
                                    style="width: 87%">
                        <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.answer3>
                            <h5 class="mb-0 text-light">
                                Answer #3
                            </h5>
                        </b-card-header>
                        <b-collapse id="answer3">
                            <img class="" src="@/assets/a-img/theory2.png" alt="" srcset="" style="width: 87%">
                                <video style="width: 100%;margin:0 auto;" id="my_video_1"
                                    class="video-js mt-4" data-setup='{"fluid": true}' controls
                                    width="100%" height="auto" preload="auto" controlsList="nodownload">
                                    <source
                                        src="https://player.vimeo.com/external/324803554.hd.mp4?s=242ebea7537de4f6432cb6b7cda4b969800b8724&profile_id=174"
                                        type="video/mp4">

                                </video>
                        </b-collapse>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body style="background: black;margin-bottom: 15px;">
                <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion4 style="border-radius:9px;">
                    <h5 class="mb-0 text-light">
                        Question #4
                    </h5>
                </b-card-header>
                <b-collapse id="accordion4" accordion="my-accordion">
                    <b-card-body style="padding: 1vh !important;">
                        <img class="qimgs" src="@/assets/a-img/q1-black.png" alt="" srcset=""
                                    style="width: 87%">
                        <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.answer4>
                            <h5 class="mb-0 text-light">
                                Answer #4
                            </h5>
                        </b-card-header>
                        <b-collapse id="answer4">
                            <img class="" src="@/assets/a-img/theory2.png" alt="" srcset="" style="width: 87%">
                                <video style="width: 100%;margin:0 auto;" id="my_video_1"
                                    class="video-js mt-4" data-setup='{"fluid": true}' controls
                                    width="100%" height="auto" preload="auto" controlsList="nodownload">
                                    <source
                                        src="https://player.vimeo.com/external/324803554.hd.mp4?s=242ebea7537de4f6432cb6b7cda4b969800b8724&profile_id=174"
                                        type="video/mp4">

                                </video>
                        </b-collapse>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body style="background: black;margin-bottom: 15px;">
                <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion5 style="border-radius:9px;">
                    <h5 class="mb-0 text-light">
                        Question #5
                    </h5>
                </b-card-header>
                <b-collapse id="accordion5" accordion="my-accordion">
                    <b-card-body style="padding: 1vh !important;">
                        <img class="qimgs" src="@/assets/a-img/q1-black.png" alt="" srcset=""
                                    style="width: 87%">
                        <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.answer5>
                            <h5 class="mb-0 text-light">
                                Answer #5
                            </h5>
                        </b-card-header>
                        <b-collapse id="answer5">
                            <img class="" src="@/assets/a-img/theory2.png" alt="" srcset="" style="width: 87%">
                                <video style="width: 100%;margin:0 auto;" id="my_video_1"
                                    class="video-js mt-4" data-setup='{"fluid": true}' controls
                                    width="100%" height="auto" preload="auto" controlsList="nodownload">
                                    <source
                                        src="https://player.vimeo.com/external/324803554.hd.mp4?s=242ebea7537de4f6432cb6b7cda4b969800b8724&profile_id=174"
                                        type="video/mp4">

                                </video>
                        </b-collapse>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body style="background: black;margin-bottom: 15px;">
                <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion6 style="border-radius:9px;">
                    <h5 class="mb-0 text-light">
                        Question #6
                    </h5>
                </b-card-header>
                <b-collapse id="accordion6" accordion="my-accordion">
                    <b-card-body style="padding: 1vh !important;">
                        <img class="qimgs" src="@/assets/a-img/q1-black.png" alt="" srcset=""
                                    style="width: 87%">
                        <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.answer6>
                            <h5 class="mb-0 text-light">
                                Answer #6
                            </h5>
                        </b-card-header>
                        <b-collapse id="answer6">
                            <img class="" src="@/assets/a-img/theory2.png" alt="" srcset="" style="width: 87%">
                                <video style="width: 100%;margin:0 auto;" id="my_video_1"
                                    class="video-js mt-4" data-setup='{"fluid": true}' controls
                                    width="100%" height="auto" preload="auto" controlsList="nodownload">
                                    <source
                                        src="https://player.vimeo.com/external/324803554.hd.mp4?s=242ebea7537de4f6432cb6b7cda4b969800b8724&profile_id=174"
                                        type="video/mp4">

                                </video>
                        </b-collapse>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body style="background: black;margin-bottom: 15px;border-radius:9px;">
                <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion7 style="border-radius:9px;">
                    <h5 class="mb-0 text-light">
                        Question #7
                    </h5>
                </b-card-header>
                <b-collapse id="accordion7" accordion="my-accordion">
                    <b-card-body style="padding: 1vh !important;">
                        <img class="qimgs" src="@/assets/a-img/q1-black.png" 
                                    style="width: 87%">
                        <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.answer7>
                            <h5 class="mb-0 text-light">
                                Answer #7
                            </h5>
                        </b-card-header>
                        <b-collapse id="answer7">
                            <img class="" src="@/assets/a-img/a3.jpg" alt="" srcset="" style="width: 87%">
                                <video style="width: 100%;margin:0 auto;" id="my_video_1"
                                    class="video-js mt-4" data-setup='{"fluid": true}' controls
                                    width="100%" height="auto" preload="auto" controlsList="nodownload">
                                    <source
                                        src="https://player.vimeo.com/external/324803554.hd.mp4?s=242ebea7537de4f6432cb6b7cda4b969800b8724&profile_id=174"
                                        type="video/mp4">

                                </video>
                        </b-collapse>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body style="background: black;margin-bottom: 15px;">
                <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion8 style="border-radius:9px;">
                    <h5 class="mb-0 text-light">
                        Question #8
                    </h5>
                </b-card-header>
                <b-collapse id="accordion8" accordion="my-accordion">
                    <b-card-body style="padding: 1vh !important;">
                        <img class="qimgs" src="@/assets/a-img/46.png" alt="" srcset=""
                                    style="width: 87%">
                        <b-card-header header-tag="header" class="card-header QHeader bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.answer8>
                            <h5 class="mb-0 text-light">
                                Answer #8
                            </h5>
                        </b-card-header>
                        <b-collapse id="answer8">
                            <img class="" src="@/assets/a-img/a3.jpg" alt="" srcset="" style="width: 87%">
                                <video style="width: 100%;margin:0 auto;" id="my_video_1"
                                    class="video-js mt-4" data-setup='{"fluid": true}' controls
                                    width="100%" height="auto" preload="auto" controlsList="nodownload">
                                    <source
                                        src="https://player.vimeo.com/external/324803554.hd.mp4?s=242ebea7537de4f6432cb6b7cda4b969800b8724&profile_id=174"
                                        type="video/mp4">

                                </video>
                        </b-collapse>
                    </b-card-body>
                </b-collapse>
            </b-card>

        </div>
    </div>
</template>

<script>
export default {
  name: 'accordian',
}
</script>

<style>
.QHeader{
    background-image: linear-gradient(to right, #7f00ff ,#e100ff) !important;
}

</style>