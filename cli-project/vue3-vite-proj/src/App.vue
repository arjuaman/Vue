<template>
  <div class="preview">
    <label>Name is: {{ formData.name }}</label
    ><br />
    <label>Summary: {{ formData.profileSummary }}</label
    ><br />
    <label>Country: {{ formData.country }}</label
    ><br />
    <label>Preferred location is: {{ formData.jobLocation }}</label
    ><br />
    <label>Remote? {{ formData.remote }}</label
    ><br />
    <label>Skills are: {{ formData.skillSet }}</label
    ><br />
    <label>YOE: {{ formData.yearsOfExp }}</label> <br />
  </div>
  <hr />
  <div class="userInput">
    <div>
      <label>Enter your name: </label> <input type="text" v-model="formData.name" />
    </div>
    <br>
    <div>
      <label>Enter about yourself: </label>
      <textarea type="text" v-model="formData.profileSummary" />
    </div>
    <br>
    <div>
      <label>Select country: </label>
      <select v-model="formData.country">
        <option value="India">India</option>
        <option value="Pak">Pak</option>
        <option value="RSA">RSA</option>
      </select>
    </div>
    <br>
    <div>
      <label>Job location preferred: </label>
      <select v-model="formData.jobLocation">
        <option value="Noida">Noida</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Pune">Pune</option>
      </select>
    </div>
    <br>
    <div>
      <label>Remote preferred? </label>
      <input type="radio" name="remote" value="Yes" v-model="formData.remote">Yes</input>
      <input type="radio" name="remote" value="No" v-model="formData.remote">No</input>
    </div>
    <br>
    <div>
      <label>Skillsets possesed are: </label>
      <input type="checkbox" v-model="formData.skillSet" name="skillset" value="Javascript">Javascript</input>
      <input type="checkbox" v-model="formData.skillSet" name="skillset" value="HTML">HTML</input>
      <input type="checkbox" v-model="formData.skillSet" name="skillset" value="Vue">Vue</input>
      <input type="checkbox" v-model="formData.skillSet" name="skillset" value="React">React</input>
    </div>
    <br>
    <div>
      <label>What's total experience? </label>
      <input type="number" v-model="formData.yearsOfExp"/>
    </div>
  </div>
  <button type="submit" v-on:click="submitData">Submit</button>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: "",
        remote: "",
        skillSet: [],
        yearsOfExp: 0,
      },
    };
  },
  methods: {
    submitData() {
      console.log(this.formData);
    },
  },
};
</script>

<style>
</style>