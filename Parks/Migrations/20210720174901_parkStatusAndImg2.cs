using Microsoft.EntityFrameworkCore.Migrations;

namespace Parks.Migrations
{
    public partial class parkStatusAndImg2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ParkImg",
                table: "Parks",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: false);

            migrationBuilder.AddColumn<bool>(
                name: "ParkStatus",
                table: "Parks",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "Parks",
                keyColumn: "ParkId",
                keyValue: 1,
                columns: new[] { "ParkImg", "ParkStatus" },
                values: new object[] { "http://travelspot24.com/wp-content/uploads/2019/07/Yosemite-National-Park-Tours-Camping-Lodging-Weather-Location-Hotels-Restaurants-Travel-in-USA.jpg", true });

            migrationBuilder.UpdateData(
                table: "Parks",
                keyColumn: "ParkId",
                keyValue: 2,
                columns: new[] { "ParkImg", "ParkStatus" },
                values: new object[] { "https://cdn2.apstatic.com/photos/hike/7024748_medium_1554847576.jpg", true });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParkImg",
                table: "Parks");

            migrationBuilder.DropColumn(
                name: "ParkStatus",
                table: "Parks");
        }
    }
}
