<template>
  <div class="contact">
    <h2><u>Contacts</u></h2>
    <br />
    <div
      v-for="contact in contacts"
      :key="contact.phone"
      :email="contact.email"
    >
      <h4>{{ contact.name }}</h4>
      <p>
        Tel: {{ contact.phone }} <br />
        Email: {{ contact.email }} <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      contacts: [
        {
          name: "John Doe, CEO:",
          phone: "+555 657 8989",
          email: "john@postit.com",
        },
        {
          name: "Joe Beck, Vice President:",
          phone: "+555 768 5567",
          email: "joe@postit.com",
        },
        {
          name: "Lisa Oak, HR:",
          phone: "+555 345 6654",
          email: "hr@postit.com",
        },
        {
          name: "Tina Bush, Customer Specialist:",
          phone: "+555 568 6898",
          email: "tina@postit.com",
        },
      ],
    };
  },
};
</script>