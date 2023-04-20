<template>
    <body>
        <div class="container">
            <h1>Заявки на учителя</h1>
            <div class="wrapper">
                <div class="item">
                    <h2 class="subtitle">О себе (обязательно классы преподавания и предметы)</h2>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque dolores sint
                        recusandae
                        reiciendis reprehenderit iure amet exercitationem quod molestias.</p>
                </div>
                <div class="item">
                    <h2 class="subtitle">Цель</h2>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque dolores sint
                        recusandae
                        reiciendis reprehenderit iure amet exercitationem quod molestias.</p>
                </div>
                <div class="item">
                    <h2 class="subtitle">Комментарий</h2>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque dolores sint
                        recusandae
                        reiciendis reprehenderit iure amet exercitationem quod molestias.</p>
                </div>
                <div class="item">
                    <h2 class="subtitle">Данные</h2>
                    <table>
                        <tr>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Отчество</th>
                            <th>Дата рождения</th>
                        </tr>
                        <tr>
                            <td>Иван</td>
                            <td>Иванович</td>
                            <td>Иванов</td>
                            <td>01.01.1990</td>
                        </tr>
                    </table>
                </div>
                <div class="item">
                    <h2 class="subtitle">Образование</h2>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Дата начала</th>
                            <th>Дата окончания</th>
                            <th>Институт</th>
                            <th>Профессия</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>01.01.1990</td>
                            <td>01.01.1990</td>
                            <td>Какой-то</td>
                            <td>Какой-то</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>01.01.1990</td>
                            <td>01.01.1990</td>
                            <td>Какой-то</td>
                            <td>Какой-то</td>
                        </tr>
                    </table>
                </div>
                <div class="item">
                    <h2 class="subtitle">Опыт</h2>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Дата начала</th>
                            <th>Дата окончания</th>
                            <th>Компания</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>01.01.1990</td>
                            <td>01.01.1990</td>
                            <td>Какой-то</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>01.01.1990</td>
                            <td>01.01.1990</td>
                            <td>Какой-то</td>
                        </tr>
                    </table>
                </div>
                <div class="buttons">
                    <button class="confirm">Одобрить</button>
                    <button class="cancel">Отклонить</button>
                </div>
            </div>
        </div>
    </body>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    color: #9fa5af;
    font-style: normal;
    font-weight: 400;
    background: #202428;
}

.container {
    max-width: 1107px;
    margin: 0 auto;
    width: 97%;
}

h1 {
    text-align: center;
    font-size: 35px;
    color: #fff;
    margin-bottom: 30px;
}

.subtitle {
    text-align: center;
    margin-bottom: 10px;
    font-size: 23px;
}

.text {
    max-width: 1050px;
    font-size: 18px;
    color: #9fa5af;
}

.wrapper {
    border: 1px solid #9fa5af;
    padding: 15px 0px 0 0;
    border-left: 0;
}

.item {
    margin-bottom: 30px;
}

table {
    border-collapse: collapse;
    width: 100%;
    margin: auto;
}

th,
td {
    border-bottom: 1px solid #9fa5af;
    padding: 10px 15px;
    text-align: left;
}


td {
    font-size: 14px;
}

.buttons {
    display: flex;
}

button {
    width: 50%;
    background-color: transparent;
    border: 0;
    font-size: 18px;
    color: #d5ddeb;
    padding: 7px 0;
    cursor: pointer;
}

.confirm {
    background-color: #0e6dfc;
}

.cancel {
    background-color: #6b747b;
}

@media(max-width:500px) {
    h1 {
        font-size: 25px;
    }

    .subtitle {
        font-size: 18px;
    }

    th,
    td {
        padding: 10px;
        font-size: 12px;
    }
}</style>
