<template lang="html">
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <div class="table-responsive">
                        <table class="table is-bordered is-striped is-narrow">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th width="15%">Data</th>
                                    <th width="15%">Data de entrega</th>
                                    <th width="30%">Disciplina</th>
                                    <th width="30%">Professor</th>
                                    <th colspan="3">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="n in 10">
                                    <td class="is-icon"> <i class="fa fa-check" v-if="n % 3 == 0"></i> </td>
                                    <td> 17/02/2017 </td>
                                    <td> 17/02/2017 </td>
                                    <td> I.L.M. </td>
                                    <td> Nome do prof. </td>
                                    <td class="is-icon"> <a href="#"> <i class="fa fa-eye"></i> </a> </td>
                                    <td class="is-icon"> <a href="#"> <i class="fa fa-pencil"></i> </a> </td>
                                    <td class="is-icon"> <a href="#"> <i class="fa fa-times"></i> </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.table-responsive {
    display: block;
    width: 100%;
    min-height: .01%;
    overflow-x: auto;
}
</style>
