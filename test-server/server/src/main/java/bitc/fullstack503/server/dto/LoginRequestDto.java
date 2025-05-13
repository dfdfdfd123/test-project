package bitc.fullstack503.server.dto;

import lombok.Data;

@Data
public class LoginRequestDto {
    private String userId;
    private String userPw;
    private String userType;
    private String branchSupervisor;
    private String warehouseName;
}
