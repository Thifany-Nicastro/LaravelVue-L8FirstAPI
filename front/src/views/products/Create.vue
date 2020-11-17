<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-center">
                    <div class="card-header">Create product</div>

                    <div class="card-body">
                        <form>
                            <div class="row mb-3 justify-content-center">
                                <label for="name" class="col-md-2 col-form-label text-md-right">Name</label>

                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="name" v-model="product.name">
                                </div>
                            </div>
                            <div class="row mb-3 justify-content-center">
                                <label for="description" class="col-md-2 col-form-label text-md-right">Description</label>

                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="description" v-model="product.description">
                                </div>
                            </div>
                            <div class="row mb-3 justify-content-center">
                                <label for="value" class="col-md-2 col-form-label text-md-right">Value</label>

                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="value" v-model="product.value">
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary" type="button" @click.prevent="store()">Button</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    axios.defaults.baseURL = "http://localhost:8000/api";

    export default {
        data() {
            return {
                product: {
                    name: '',
                    description: '',
                    value: ''
                }
            }
        },

        methods: {
            reset () {
                this.product = {
                    name: '',
                    description: '',
                    value: ''
                }
            },

            store () {
                axios.post('/products', this.product).then(response => {
                    console.log(response)
                })
                this.reset();
            },
        }
    }
</script>