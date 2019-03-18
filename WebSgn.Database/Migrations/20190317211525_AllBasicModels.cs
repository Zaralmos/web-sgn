using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSgn.Database.Migrations
{
    public partial class AllBasicModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "SignedUp",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "Articles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    ContentJson = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    PhotoUrl = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    IsApplicable = table.Column<bool>(nullable: false),
                    Photo = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Files",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Content = table.Column<byte[]>(nullable: true),
                    MimeType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Files", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Subscrubers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FullName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    Subscribed = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscrubers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TelemetricEvents",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DomElement = table.Column<string>(nullable: true),
                    MouseX = table.Column<int>(nullable: false),
                    MouseY = table.Column<int>(nullable: false),
                    Fired = table.Column<DateTime>(nullable: false),
                    SecondsOnline = table.Column<int>(nullable: false),
                    EventUrl = table.Column<string>(nullable: true),
                    UserIp = table.Column<string>(nullable: true),
                    ScreenWidth = table.Column<int>(nullable: false),
                    ScreenHeight = table.Column<int>(nullable: false),
                    SessionId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TelemetricEvents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DepartmentSections",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DepartmentId = table.Column<int>(nullable: false),
                    ArticleId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartmentSections", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DepartmentSections_Articles_ArticleId",
                        column: x => x.ArticleId,
                        principalTable: "Articles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NewsItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(nullable: false),
                    ArticleId = table.Column<int>(nullable: false),
                    Titile = table.Column<string>(nullable: true),
                    Published = table.Column<DateTime>(nullable: false),
                    IsWip = table.Column<bool>(nullable: false),
                    TagsString = table.Column<string>(nullable: true),
                    ViewCount = table.Column<int>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    AnnouncedTime = table.Column<DateTime>(nullable: false),
                    DepartmentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NewsItems_Articles_ArticleId",
                        column: x => x.ArticleId,
                        principalTable: "Articles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NewsItems_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NewsItems_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArticleId = table.Column<int>(nullable: false),
                    FullName = table.Column<string>(nullable: true),
                    PhotoUrl = table.Column<string>(nullable: true),
                    Position = table.Column<string>(nullable: true),
                    AcademicStatus = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Birthday = table.Column<DateTime>(nullable: false),
                    DisciplinesString = table.Column<string>(nullable: true),
                    PersonalPageUrl = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    ShowEmail = table.Column<bool>(nullable: false),
                    Phone = table.Column<string>(nullable: true),
                    ShowPhone = table.Column<bool>(nullable: false),
                    VkUrl = table.Column<string>(nullable: true),
                    ShowVk = table.Column<bool>(nullable: false),
                    DepartmentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Persons_Articles_ArticleId",
                        column: x => x.ArticleId,
                        principalTable: "Articles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Persons_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WebSgnUsersDepartments",
                columns: table => new
                {
                    WebSgnUserId = table.Column<int>(nullable: false),
                    DepartmentId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WebSgnUsersDepartments", x => new { x.DepartmentId, x.WebSgnUserId });
                    table.ForeignKey(
                        name: "FK_WebSgnUsersDepartments_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WebSgnUsersDepartments_AspNetUsers_WebSgnUserId",
                        column: x => x.WebSgnUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NewsItemsDepartments",
                columns: table => new
                {
                    NewsItemId = table.Column<int>(nullable: false),
                    DepartmentId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsItemsDepartments", x => new { x.DepartmentId, x.NewsItemId });
                    table.ForeignKey(
                        name: "FK_NewsItemsDepartments_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NewsItemsDepartments_NewsItems_NewsItemId",
                        column: x => x.NewsItemId,
                        principalTable: "NewsItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PersonsDepartments",
                columns: table => new
                {
                    PersonId = table.Column<int>(nullable: false),
                    DepartmentId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonsDepartments", x => new { x.DepartmentId, x.PersonId });
                    table.ForeignKey(
                        name: "FK_PersonsDepartments_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PersonsDepartments_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_DepartmentId",
                table: "AspNetUsers",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Articles_Name",
                table: "Articles",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentSections_ArticleId",
                table: "DepartmentSections",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentSections_Name",
                table: "DepartmentSections",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_Files_Name",
                table: "Files",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_NewsItems_ArticleId",
                table: "NewsItems",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsItems_DepartmentId",
                table: "NewsItems",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsItems_UserId",
                table: "NewsItems",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsItemsDepartments_NewsItemId",
                table: "NewsItemsDepartments",
                column: "NewsItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_ArticleId",
                table: "Persons",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_DepartmentId",
                table: "Persons",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_PersonsDepartments_PersonId",
                table: "PersonsDepartments",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_WebSgnUsersDepartments_WebSgnUserId",
                table: "WebSgnUsersDepartments",
                column: "WebSgnUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Departments_DepartmentId",
                table: "AspNetUsers",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Departments_DepartmentId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "DepartmentSections");

            migrationBuilder.DropTable(
                name: "Files");

            migrationBuilder.DropTable(
                name: "NewsItemsDepartments");

            migrationBuilder.DropTable(
                name: "PersonsDepartments");

            migrationBuilder.DropTable(
                name: "Subscrubers");

            migrationBuilder.DropTable(
                name: "TelemetricEvents");

            migrationBuilder.DropTable(
                name: "WebSgnUsersDepartments");

            migrationBuilder.DropTable(
                name: "NewsItems");

            migrationBuilder.DropTable(
                name: "Persons");

            migrationBuilder.DropTable(
                name: "Articles");

            migrationBuilder.DropTable(
                name: "Departments");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_DepartmentId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FullName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Phone",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SignedUp",
                table: "AspNetUsers");
        }
    }
}
