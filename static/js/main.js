<script type="text/javascript">
  let searchForm = document.getElementById('searchForm')
  let pageLinks = document.getElementsByClassName('page-link')

  if(searchForm){
    for(let i=0; pageLinks.length > i; i++){
      pageLinks[i].addEventListener('click', (e)=>{
        e.preventDefault()
        
        //GET THE DATA ATTRIBUTE
        let page = this.dataset.page

        //ADD HIDDEN SEARCH INPUT TO FORM
        searchForm.innerHTML += `<input value=${page} name="page" hidden/>`


        //SUBMIT FORM
        searchForm.submit()
      })
    }
  }


</script>