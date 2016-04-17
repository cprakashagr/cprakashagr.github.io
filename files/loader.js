function loadData() {
    
    //  Summary
    var elem = document.getElementById('summaryLoading');
    elem.parentNode.removeChild(elem);
    document.getElementById('summary').innerHTML = 'Student programmer with 5+ years of experience in Java, C and Android programming with keen interest in research-oriented work. <br><br>Currently working with Snapwiz Inc. on <a target="_blank" href="http://glider.ai/">Glider App</a>.<br />';
    
    //  MyOpenSourceContributions  
    var elem = document.getElementById('myOpenSourceContributionsLoading');
    elem.parentNode.removeChild(elem);
    var gitContri = document.getElementById("gitContributions");
    for (var i in openContributionData) {
        gitContri.innerHTML += '<li><strong><em><a target="_blank" href="'+openContributionData[i].link+'">'+openContributionData[i].title+'</em></strong></a><br>'+openContributionData[i].desc+'</li><br>';
    }
    
    //  GitRepos
    $.getJSON('https://api.github.com/users/cprakashagr/repos',function(data){
        var elem = document.getElementById('gitReposLoading');
        elem.parentNode.removeChild(elem);
        $.each(data, function(key,val){
            if (!val.fork)
            document.getElementById("gitRepos").innerHTML += '<li><strong><em><a target="_blank" href="'+val.html_url+'">'+val.name+'</em></strong></a><br>'+val.description+'</li><br>';
        });
    });
    
    //  Gists
    $.getJSON('https://api.github.com/users/cprakashagr/gists',function(data, status, xhr){
        if (status == "success") {
            var elem = document.getElementById('gistsLoading');
            elem.parentNode.removeChild(elem);
            $.each(data, function(key,val){
                var fileNames = '';
                for (j in val.files) {
                    fileNames += j;
                    fileNames += ' / ';
                }
                fileNames = fileNames.substring(0,fileNames.length-3);
                document.getElementById("gists").innerHTML += '<li><strong><em><a target = "_blank" href="'+val.html_url+'">'+fileNames+'</em></strong></a><br>'+val.description+'</li><br>';
            });
        } else {
            var elem = document.getElementById('gistsLoading');
            elem.innerHTML = "Failed to load data. Hourly Limit exeeded for your IP Address.";
        }
    });
    
    //  NonGitProjects
    var elem = document.getElementById('nonGitProjectsLoading');
    elem.parentNode.removeChild(elem);
    var nonGitProj = document.getElementById('nonGitProjects');
    for (var i in nonGitData) {
        nonGitProj.innerHTML += '<li><strong><em><a target="_blank" href="'+nonGitData[i].link+'">'+nonGitData[i].title+'</em></strong></a><br>'+nonGitData[i].desc+'</li><br>';
    }
    
    //  Contribute
    var elem = document.getElementById('contributeLoading');
    elem.parentNode.removeChild(elem);
    document.getElementById("contribute").innerHTML = 'Want to help out? Submit a <a target="_blank" href="https://github.com/cprakashagr?tab=repositories">feature request, open an issue, or submit a patch</a>.<br />';

    
    //  Skills
    var elem = document.getElementById('skillsLoading');
    elem.parentNode.removeChild(elem);

    
    //  Education
    var elem = document.getElementById('educationLoading');
    elem.parentNode.removeChild(elem);
    var edu = document.getElementById('education');
    for (var i in eduData) {
        edu.innerHTML += '<li><strong><em>'+eduData[i].title+'</em></strong><br>'+eduData[i].desc01+'<h6><span style="text-align:right">'+eduData[i].desc02+'</span></h6></li>';
    }
    
    //  Hobbies
    var elem = document.getElementById('hobbiesLoading');
    elem.parentNode.removeChild(elem);
    document.getElementById('hobbies').innerHTML = '<li><em>Singing, Surfing Quora, Computer Programming</em></li>';

}
window.onload = loadData;