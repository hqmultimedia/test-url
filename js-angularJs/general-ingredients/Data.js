upload.controller('Load_Data_Controller', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {

        //01. Setting source 

        $rootScope.optionsModelTheme = {

            value_selected: '2'
        };


        // C-02.Set giá trị nhận vào đầu tiên của option
        $rootScope.optionsModelQuantity = {
            Page: 1,
            PageSize: '9'

        };
        // Set giá trị cho đầu ra của setting view data(ko xoá)
        $rootScope.optionsModelDisplay = {

            hienthi: ''
        };

        $rootScope.onChangePageSize = function(page_data) {

                $scope.DataBeginByPage = 0;
                var Title = "Success";
                var Message = "Cập nhật thành công !";
                var Type = "success";
                $scope.HQToast(Title, Message, Type);

                $scope.getDataPagination(page_data);

            }
            //01. End setting source


        $rootScope.getDataPagination = function() {
                // code chỉnh sửa theo yêu cầu dự án


                var URL_API_Load = 'http://localhost/CV-Web-Blog/data/posts/posts.json';



                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)




    }) //End controller FunctionController