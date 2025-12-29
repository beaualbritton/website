<script lang="ts">
import ProjectBox from "./ProjectBox.svelte";
</script>

<div class = "flex flex-row flex-wrap mt-4 w-6xl gap-6">
<ProjectBox title="valen" description ="distributed version control platform" languageList="sv,ts,dj,py,psql,nginx,aws,docker"/>
<ProjectBox title="unisee" description ="unbiased, .edu verified college reviews"languageList="next,tsx,supa,ts,tcss"/>
<ProjectBox title="web" description ="various -- SPAs, websockets, converters, authentication"languageList="ts,sv,dj,psql"/>
<ProjectBox title="simulators" description ="suite of hardware simulators & systems programs"languageList="cpp,c,py,asm"/>
<ProjectBox title="direc-tuit" description ="a simpler way to visualize your files"languageList="cpp,cmake"/>
<ProjectBox title="graphics" description ="graphical programs in opengl (C++) & godot"languageList="cpp,gl,gd"/>
</div>
