<script setup>
import Logo from "../assets/logo.png"
</script>
<template>
    <div class="header">
        <div class="top-bar">
            <img :src="Logo"/>
            <div style="color: white; font-size: 32px; font-family: Epilogue; font-weight: 600; word-wrap: break-word">Mesh_THA_stic (NNN)</div>
            <select>
                <option>Mesh_THA_stic</option>
            </select>
        </div>

        <div class="liveInfo-bar">
            <div class="active-node">#MediumFast (868MHz) — active nodes: 136/hour, 253/day, 379/week.</div> 

            <div class="active-button">
                <label class="refresh-toggle">
                    <input type="checkbox" v-model="autoRefresh"/>
                    <span>Auto-Refresh every 60 seconds</span>
                </label>

                <button class="refresh-button">Refresh Now</button>

                <span class="updated-badge">Updated 10:39 AM</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Epilogue&display=swap');
.header{
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.top-bar{
    display: flex;
    align-items: center;
    gap: 15px;
}
.top-bar select{
    display: flex;
    border-radius: 5px;
    padding: 10px;
    width: 200px;
    font-family: Epilogue;
    font-size: 15px;
}
.liveInfo-bar{
    background: #736F6F;
    display: flex;
    padding:10px 250px 10px 15px;
    flex-direction: row;
    align-items: center;
    gap: 45px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.active-button{
    display: flex;
    align-items: center;
    gap: 10px;
}
.refresh-button{
    background: #D9D9D9;
    color: #000;
    padding: 10px;
}
.updated-badge{
    padding: 10px;
    border-radius: 20px;
    background: #D9D9D9;
    color: #736F6F;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>