using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebSgn.Models;
using WebSgn.Repositories;

namespace WebSgn.Controllers
{
    [Route("api/[controller]")]
    public class EntitiesController : BaseController
    {
        private readonly BaseEntitiesRepository repository;

        public EntitiesController(BaseEntitiesRepository repos)
        {
            repository = repos;
        }

        [HttpGet("departments")]
        public async Task<IActionResult> GetDepartments()
        {
            try
            {
                return SgnOk(await repository.GetDepartments());
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPost("departments")]
        public async Task<IActionResult> AddDepartment([FromBody] Department department)
        {
            try
            {
                return SgnOk(await repository.AddDepartment(department));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpDelete("departments/{id}")]
        public async Task<IActionResult> RemoveDepartment(int id)
        {
            try
            {
                return SgnOk(await repository.RemoveDepartment(id));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPut("departments/{id}")]
        public async Task<IActionResult> UpdateDepartment(int id, Department source)
        {
            try
            {
                await repository.UpdateDepartment(id, source);
                return SgnOk();
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpGet("departments-sections")]
        public async Task<IActionResult> GetDepartmentSections()
        {
            try
            {
                return SgnOk(await repository.GetDepartmentSections());
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPost("departments-sections")]
        public async Task<IActionResult> AddDepartmentSection([FromBody] DepartmentSection section)
        {
            try
            {
                return SgnOk(await repository.AddDepartmentSection(section));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpDelete("departments-sections/{id}")]
        public async Task<IActionResult> RemoveDepartmentSection(int id)
        {
            try
            {
                return SgnOk(await repository.RemoveDepartmentSection(id));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPut("departments-sections/{id}")]
        public async Task<IActionResult> UpdateDepartmentSection(int id, DepartmentSection source)
        {
            try
            {
                await repository.UpdateDepartmentSection(id, source);
                return SgnOk();
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpGet("news-items")]
        public async Task<IActionResult> GetNewsItems([FromRoute] SearchParameters param)
        {
            try
            {
                return SgnOk(await repository.GetNewsItems(param));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPost("news-items")]
        public async Task<IActionResult> AddNewsItem([FromBody] NewsItem news)
        {
            try
            {
                return SgnOk(await repository.AddNewsItem(news));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpDelete("news-items/{id}")]
        public async Task<IActionResult> RemoveNewsItem(int id)
        {
            try
            {
                return SgnOk(await repository.RemoveNewsItem(id));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPut("news-items/{id}")]
        public async Task<IActionResult> UpdateNewsItem(int id, NewsItem source)
        {
            try
            {
                await repository.UpdateNewsItem(id, source);
                return SgnOk();
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpGet("persons")]
        public async Task<IActionResult> GetPersons([FromRoute] SearchParameters param)
        {
            try
            {
                return SgnOk(await repository.GetPersons(param));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpGet("persons/{id}")]
        public async Task<IActionResult> GetPersons(int id)
        {
            try
            {
                return SgnOk(await repository.GetPerson(id));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPost("persons")]
        public async Task<IActionResult> AddPerson([FromBody] Person person)
        {
            try
            {
                return SgnOk(await repository.AddPerson(person));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpDelete("persons/{id}")]
        public async Task<IActionResult> RemovePersons(int id)
        {
            try
            {
                return SgnOk(await repository.RemovePerson(id));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPut("persons/{id}")]
        public async Task<IActionResult> UpdatePerson(int id, Person source)
        {
            try
            {
                await repository.UpdatePerson(id, source);
                return SgnOk();
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpGet("articles/{id}")]
        public async Task<IActionResult> GetArticle(int id)
        {
            try
            {
                return SgnOk(await repository.GetArticle(id));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPost("articles")]
        public async Task<IActionResult> AddArticles([FromBody] Article article)
        {
            try
            {
                return SgnOk(await repository.AddArticle(article));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpDelete("articles/{id}")]
        public async Task<IActionResult> RemoveArticle(int id)
        {
            try
            {
                return SgnOk(await repository.RemoveArticle(id));
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }

        [HttpPut("articles/{id}")]
        public async Task<IActionResult> UpdateArticle(int id, Article source)
        {
            try
            {
                await repository.UpdateArticle(id, source);
                return SgnOk();
            }
            catch (Exception ex)
            {
                return SgnError(ex);
            }
        }
    }
}
