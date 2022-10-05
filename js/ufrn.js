fetch("/api/v1/search?type=AllFields&facet%5b%5d=format&sort=relevance&page=1&limit=0").then(response => response.json()).then(result => {
    let totalSigaa = result.facets.format.filter(el => el.value == 'Livro')
    let totalPortal = result.facets.format.filter(el => el.value == 'Online')
    let totalMaster = result.facets.format.filter(el => el.value == 'masterThesis')
    let totalDoctoral = result.facets.format.filter(el => el.value == 'doctoralThesis')
    
    document.getElementById('ufrn-total-count').innerHTML = result.resultCount.toLocaleString()
    document.getElementById('ufrn-sigaa-count').innerHTML = totalSigaa[0].count.toLocaleString()
    document.getElementById('ufrn-portal-count').innerHTML = totalPortal[0].count.toLocaleString()
    document.getElementById('ufrn-repositorio-count').innerHTML = (totalMaster[0].count + totalDoctoral[0].count).toLocaleString()
})
