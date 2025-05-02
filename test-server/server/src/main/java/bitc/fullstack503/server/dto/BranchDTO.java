package bitc.fullstack503.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BranchDTO {
    private String branchId;
    private String branchName;
    private String branchSupervisor;
    private String branchPhone;
    private String branchZipCode;
    private String branchRoadAddr;
    private String branchDetailAddr;
}

