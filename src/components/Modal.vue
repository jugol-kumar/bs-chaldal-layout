<template>
  <div>
    <button @click="toggleModal">Open Modal</button>
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <!-- Modal content goes here -->
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isModalOpen = ref(false);

    const toggleModal = () => {
      isModalOpen.value = !isModalOpen.value;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      isModalOpen,
      toggleModal,
      closeModal
    };
  }
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 1rem;
  width: 50%;
  height: 70vh;
}
</style>
