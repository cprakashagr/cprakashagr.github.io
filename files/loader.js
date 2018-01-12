function loadData() {
    
    //  Summary
    var elem = document.getElementById('summaryLoading');
    elem.parentNode.removeChild(elem);
    // document.getElementById('summary').innerHTML = 'Now training my Mac with Waves. I love graphs, machine learning and intelligent systems. Programmer with 5+ yrs of experience in Java, Android and Python with keen interest in research-oriented work.<br><br>Currently working with Snapwiz Inc. on <a target="_blank" href="http://glider.ai/">Glider App</a>.<br />';
    document.getElementById('summary').innerHTML = '' +
        'Currently working on predictive modelling for multi-lingual localization from a corpus.<br /><br />' +
        'Have experience in AI, Deep Learning & Software Development.<br /><br />' +
        'Have worked with <a href="https://snapwiz.com" target="_blank">Snapwiz Inc</a> on <a href="https://glider.ai">GliderApp</a>.' +
        '';

    //  Independent AI Work
    elem = document.getElementById('aiLoading');
    elem.parentNode.removeChild(elem);
    var ai = document.getElementById("aiWorks");
    for (var i in aiWorks) {
        ai.innerHTML += '<li><strong><em><a target="_blank" href="'+aiWorks[i].link+'">'+aiWorks[i].title+'</em></strong></a><br />'+aiWorks[i].desc+'</li>';
    }
    
    //  Publications
    elem = document.getElementById('publicationLoading');
    elem.parentNode.removeChild(elem);
    var publication = document.getElementById("publicationWorks");
    for (i in publicationData) {
        publication.innerHTML += '<li><strong><em>'+publicationData[i].title+'</em></strong></a>'+publicationData[i].desc+'</li><br />';
    }
    
    //  MyOpenSourceContributions  
    elem = document.getElementById('myOpenSourceContributionsLoading');
    elem.parentNode.removeChild(elem);
    var gitContri = document.getElementById("gitContributions");
    for (i in openContributionData) {
        gitContri.innerHTML += '<li><strong><em><a target="_blank" href="'+openContributionData[i].link+'">'+openContributionData[i].title+'</em></strong></a><br />'+openContributionData[i].desc+'</li><br />';
    }
    
    //  GitRepos
    $.getJSON('https://api.github.com/users/cprakashagr/repos?per_page=500',function(data){
        var elem = document.getElementById('gitReposLoading');
        elem.parentNode.removeChild(elem);
        $.each(data, function(key,val){
            if (!val.fork)
            document.getElementById("gitRepos").innerHTML += '<li><strong><em><a target="_blank" href="'+val.html_url+'">'+val.name+'</em></strong></a><br />'+(val.description?val.description:'')+'</li><br />';
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
                document.getElementById("gists").innerHTML += '<li><strong><em><a target = "_blank" href="'+val.html_url+'">'+fileNames+'</em></strong></a><br/>'+val.description+'</li><br />';
            });
        } else {
            var elem = document.getElementById('gistsLoading');
            elem.innerHTML = "Failed to load data. Hourly Limit exeeded for your IP Address.";
        }
    });
    
    //  NonGitProjects
    elem = document.getElementById('nonGitProjectsLoading');
    elem.parentNode.removeChild(elem);
    var nonGitProj = document.getElementById('nonGitProjects');
    for (i in nonGitData) {
        nonGitProj.innerHTML += '<li><strong><em><a target="_blank" href="'+nonGitData[i].link+'">'+nonGitData[i].title+'</em></strong></a><br />'+nonGitData[i].desc+'</li><br />';
    }
    
    //  Contribute
    elem = document.getElementById('contributeLoading');
    elem.parentNode.removeChild(elem);
    document.getElementById("contribute").innerHTML = 'Want to help out? Submit a <a target="_blank" href="https://github.com/cprakashagr?tab=repositories">feature request, open an issue, or submit a patch</a>.<br />';


    //  Guest Lectures
    elem = document.getElementById('guestLecturesLoading');
    elem.parentNode.removeChild(elem);
    var guest = document.getElementById('guestLectures');
    for (i in guestLectures) {
        guest.innerHTML += '<li><strong><em>'+guestLectures[i].title+'</em></strong><br />'+guestLectures[i].desc01+'</li>';
    }

    //  Skills
    elem = document.getElementById('skillsLoading');
    elem.parentNode.removeChild(elem);
    document.getElementById("skills").innerHTML = 'NeuroScience, MachineLearning, Android';


    //  Education
    elem = document.getElementById('educationLoading');
    elem.parentNode.removeChild(elem);
    var edu = document.getElementById('education');
    for (i in eduData) {
        edu.innerHTML += '<li><strong><em>'+eduData[i].title+'</em></strong><br />'+eduData[i].desc01+'<h6><span style="text-align:right">'+eduData[i].desc02+'</span></h6></li>';
    }
    
    //  Hobbies
    elem = document.getElementById('hobbiesLoading');
    elem.parentNode.removeChild(elem);
    document.getElementById('hobbies').innerHTML = '<li><em>Singing, Surfing Quora, Computer Programming</em></li>';

}
window.onload = loadData;