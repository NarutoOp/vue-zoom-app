<template>
  <div class="container mt-5">
    <b-button v-b-modal.modal-prevent-closing>Create Classroom</b-button>
    <panel v-if="LiveLectures.length > 0" class="mt-3" title="Create Live Lecture" noButton="true">
	    <div class="mt-2">
	      <b-table responsive bordered sticky-header="20vh" striped :fields="fields" :items="LiveLectures">
	      	<template v-slot:cell(Sr)="data">
		        {{ data.index + 1 }}
		    </template>

		    <template v-slot:cell(Link)>
		        <a :href="fullUrl" @click.prevent.stop="onClick(fullUrl)">{{fullUrl}}</a>
		        <input type="text" hidden ref="hiddenURL">
		    </template>

		    <template v-slot:cell(StudentName)="datas">
		        <div v-for="data in datas.value">
		        	{{data}}
		       	</div>
		    </template>

		  </b-table>
	    </div>
	</panel>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Create Classroom"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form ref="form" @submit.stop.prevent="handleSubmit">
	    <b-form-group
	        id="input-group-1"
	        label="Lecture Name"
	        label-for="input-1"
	        description="Create Unique lecture name."
	    >
	        <b-form-input
	          id="input-1"
	          v-model="name"
	          placeholder="Enter Lecture Name"
	          required
	        ></b-form-input>
	    </b-form-group>

	    <b-form-group id="input-group-2" label="Professor Name" label-for="input-2">
	        <b-form-input
	          id="input-2"
	          v-model="ProfessorName"
	          required
	          placeholder="Enter Professor Name"
	        ></b-form-input>
	    </b-form-group>

	    <b-form-group label="Choose a Date">
    		<b-form-datepicker v-model="ScheduledDate" class="mb-2"></b-form-datepicker>
    	</b-form-group>
    	
    	<b-form-group label="Choose a Time">
    		<b-form-timepicker v-model="ScheduledTime" locale="en"></b-form-timepicker>
    	</b-form-group>

	    <b-form-group label="Student Name">
	        <b-form-tags
	          v-model="StudentName" add-on-change no-outer-focus class="mb-2">

	        	<template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
		          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
		            <li v-for="tag in tags" :key="tag" class="list-inline-item">
		              <b-form-tag
		                @remove="removeTag(tag)"
		                :title="tag"
		                :disabled="disabled"
		                variant="info"
		              >{{tag}}</b-form-tag>
		            </li>
		          </ul>
		          <b-form-select
		            v-bind="inputAttrs"
		            v-on="inputHandlers"
		            :disabled="disabled || availableOptions.length === 0"
		            :options="availableOptions"
		          >
		            <template v-slot:first>
		              
		              <option disabled value="">Choose a tag...</option>
		            </template>
		          </b-form-select>
		        </template>

	        </b-form-tags>
	    </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import firebase from 'firebase';
import moment from 'moment';
  export default {
    data() {
      return {
      	fields:[{ key: 'Sr', label: '' },,'name','ProfessorName','StudentName','timestamp','Link'],
        LiveLectures : [],
        name: '',
        ProfessorName: '',
        StudentName : [],
        timestamp : '',
        ScheduledDate: '',
        ScheduledTime: '',
        fullUrl : '',

        options: ['Arpit Gupta', 'Sujal Gupta', 'MS Dhoni', 'Naruto Uzumaki', 'Lelouch Brittania', 'hIDEKI ryuga', 'Demon Slayer']
      }
    },
    computed: {
      availableOptions() {
        return this.options
      }
    },
    methods: {

      resetModal(bvModalEvt) {
        this.name = ''
        this.ProfessorName = ''
        this.StudentName = ''
        this.timestamp = ''
      },
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.handleSubmit()
      },
      handleSubmit() {
      	this.LiveLectures.push({name:this.name,ProfessorName:this.ProfessorName,StudentName:this.StudentName,timestamp:moment(Date.now()).format('LTS')})
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },
      path(){
           const path = this.$router.resolve({
		      name:'Login'
		    }).href;
		    this.fullUrl = window.location.origin +'/'+ path   
      },
      onClick(url) {
	      const input = this.$refs["hiddenURL"];
	      input.value = url;
	     
	      input.select();
	      document.execCommand("copy");
	     
	  },


    },
    mounted() {
    	this.path()	
    },
    
  }
</script>
